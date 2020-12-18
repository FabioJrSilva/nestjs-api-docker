import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @MaxLength(200, { message: 'O nome deve ter no máximo 200 caracteres' })
  @IsNotEmpty({ message: 'Informe o nome do usuário' })
  name: string;

  @IsEmail({}, { message: 'Informe um endereço de email válido' })
  @IsNotEmpty({ message: 'Informe um endereço de email' })
  email: string;

  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  @IsNotEmpty({ message: 'Informe uma senha' })
  password: string;

  @IsNotEmpty({ message: 'Informe a confirmação de senha' })
  passwordConfirmation: string;
}
