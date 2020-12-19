import { ApiProperty } from '@nestjs/swagger';
import { LoanCategories } from '../../models/LoanCategories';

export class ReturnLoanCategoryDto {
  @ApiProperty()
  category: LoanCategories;

  @ApiProperty()
  message: string;
}
