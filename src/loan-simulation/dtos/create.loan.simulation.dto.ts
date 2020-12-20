import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  Matches,
  Max,
  Min,
  MinLength,
  Validate,
} from 'class-validator';
import { RageValidator } from 'src/loan-simulation/validators/rage-validator';

export class CreateLoanSimulationDto {
  @ApiProperty()
  @MinLength(6, { message: 'O nome deve ter no máximo 200 caracteres' })
  @Matches(/^[^\s]+( [^\s]+)+$/, { message: 'Infomer um nome e um sobrenome' })
  @IsNotEmpty({ message: 'Informe o nome.' })
  name: string;

  @ApiProperty()
  @Matches(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/, {
    message: 'CPF invalido.',
  })
  @IsNotEmpty({ message: 'Informe um cpf válido.' })
  cpf: string;

  @ApiProperty()
  @Validate(RageValidator, { message: 'Informe um valor entre 1000 e 10 000' })
  amount: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Informe a data de nascimento.' })
  date_birth: string;

  @ApiProperty()
  @Min(6, { message: 'Informe um período entre 1000 e 10 000' })
  @Max(24, { message: 'Informe um período entre 1000 e 10 000' })
  period: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Informe o propósido.' })
  purpose: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Informe o sexo.' })
  sex: string;
}
