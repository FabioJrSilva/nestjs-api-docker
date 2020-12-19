import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dtos/create.user.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { CredentialsDto } from './dtos/credentials.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/models/user.model';
import { GetUser } from './get.user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOkResponse({ type: String })
  @Post('/signup')
  async signUp(
    @Body() createUserDto: CreateUserDto
  ): Promise<{ message: string }> {
    await this.authService.signUp(createUserDto);
    return {
      message: 'Cadastro realizado com sucesso',
    };
  }

  @ApiOkResponse({ type: String })
  @Post('/signin')
  async signIn(
    @Body() credentiaslsDto: CredentialsDto
  ): Promise<{ token: string }> {
    return this.authService.signIn(credentiaslsDto);
  }

  @ApiOkResponse({ type: CredentialsDto })
  @Get('/self')
  @UseGuards(AuthGuard())
  getMe(@GetUser() user: User): User {
    return user;
  }
}
