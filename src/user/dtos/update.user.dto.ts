import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';
export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Informe um nome de usuário válido' })
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail({}, { message: 'Informe um endereço de email válido' })
  email: string;
}
