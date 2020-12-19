import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create.user.dto';
import { User } from '../models/user.model';
import { FindUsersQueryDto } from './dtos/find.user.query.dto';
import { CredentialsDto } from 'src/auth/dtos/credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { email, name, password } = createUserDto;
    const user = this.create();
    user.email = email;
    user.name = name;
    user.token = crypto.randomBytes(32).toString('hex');
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    try {
      await this.save(user);
      delete user.password;
      delete user.salt;
      return user;
    } catch (error) {
      if (error.sqlState.toString() === '23000') {
        throw new ConflictException('Endereço de email já está em uso');
      }

      throw new InternalServerErrorException(
        'Erro ao salvar o usuário no banco de dados'
      );
    }
  }

  async findUsers(
    queryDto: FindUsersQueryDto
  ): Promise<{ users: User[]; total: number }> {
    queryDto.page = queryDto.page < 1 ? 1 : queryDto.page;
    queryDto.limit = queryDto.limit > 100 ? 100 : queryDto.limit;

    const { email, name } = queryDto;
    const query = this.createQueryBuilder('user');

    if (email) {
      query.where('user.email ILIKE :email', { email: `%${email}%` });
    }

    if (name) {
      query.andWhere('user.name ILIKE :name', { name: `%${name}%` });
    }

    query.skip((queryDto.page - 1) * queryDto.limit);
    query.take(+queryDto.limit);
    query.orderBy(queryDto.sort ? JSON.parse(queryDto.sort) : undefined);
    query.select(['user.name', 'user.email', 'user.id']);

    const [users, total] = await query.getManyAndCount();

    return { users, total };
  }

  async checkCredentials(credentialsDto: CredentialsDto): Promise<User> {
    const { email, password } = credentialsDto;
    const user = await this.findOne({ email });

    if (user && (await user.checkPassword(password))) {
      return user;
    }

    return null;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
