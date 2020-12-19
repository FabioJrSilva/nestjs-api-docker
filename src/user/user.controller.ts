import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
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

  @ApiOkResponse({ type: ReturnUserDto })
  @Get(':id')
  async findUserById(@Param('id') id: number): Promise<ReturnUserDto> {
    const user = await this.userService.findUserById(id);

    return {
      user,
      message: 'Usuário encontrado',
    };
  }

  @ApiOkResponse({ type: UpdateUserDto })
  @Patch(':id')
  async updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id') id: number
  ): Promise<UpdateUserDto> {
    return this.userService.updateUser(updateUserDto, id);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteUser(@Param('id') id: number): Promise<{ message: string }> {
    await this.userService.deleteUser(id);

    return {
      message: 'Usuário removido com sucesso',
    };
  }
}
