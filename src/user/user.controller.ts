import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create.user.dto';
import { FindUsersQueryDto } from './dtos/find.user.query.dto';
import { ReturnUserDto } from './dtos/return.user.dto';
import { UpdateUserDto } from './dtos/update.user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async index(@Query() query: FindUsersQueryDto) {
    const found = await this.userService.findUsers(query);

    return {
      found,
      message: 'Usuários encontrados',
    };
  }

  @Post()
  async store(@Body() createUserDto: CreateUserDto): Promise<ReturnUserDto> {
    const user = await this.userService.createUser(createUserDto);

    return {
      user,
      message: 'Cadastrado realizado com sucesso.',
    };
  }

  @Get(':id')
  async findUserById(@Param('id') id: number): Promise<ReturnUserDto> {
    const user = await this.userService.findUserById(id);

    return {
      user,
      message: 'Usuário encontrado',
    };
  }

  @Patch(':id')
  async updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id') id: number
  ) {
    return this.userService.updateUser(updateUserDto, id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.userService.deleteUser(id);

    return {
      message: 'Usuário removido com sucesso',
    };
  }
}
