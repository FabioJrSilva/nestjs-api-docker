import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateLoanCategoryDto } from './dtos/create.loan.category.dto';
import { ReturnLoanCategoryDto } from './dtos/return.loan.category.dto';
import { LoanCategoriesService } from './loan-categories.service';

@Controller('loan-categories')
export class LoanCategoriesController {
  constructor(private loanCategoriesService: LoanCategoriesService) {}
  @Post()
  async store(
    @Body() createLoanCategoryDto: CreateLoanCategoryDto
  ): Promise<ReturnLoanCategoryDto> {
    const category = await this.loanCategoriesService.createLoanCategory(
      createLoanCategoryDto
    );

    return {
      category,
      message: 'Cadastrado realizado com sucesso.',
    };
  }

  @Get()
  async index() {
    const found = await this.loanCategoriesService.findLoanCategories();

    return {
      found,
      message: 'Usuários encontrados',
    };
  }
}
