import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CredentialsDto {
  @ApiProperty()
  @IsEmail({}, { message: 'Informe um endereço de email válido' })
  @IsNotEmpty({ message: 'Informe um endereço de email' })
  email: string;

  @ApiProperty()
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  @IsNotEmpty({ message: 'Informe uma senha' })
  password: string;
}
