import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateLoanCategoryDto {
  @ApiProperty()
  @MaxLength(200, { message: 'O nome deve ter no máximo 200 caracteres' })
  @IsNotEmpty({ message: 'Informe o nome do usuário' })
  name: string;
}
