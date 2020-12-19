import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanCategories } from 'src/models/LoanCategories';
import { LoanCategoriesRepository } from '../loan-categories/loan-categories.repository';
import { CreateLoanCategoryDto } from './dtos/create.loan.category.dto';

@Injectable()
export class LoanCategoriesService {
  constructor(
    @InjectRepository(LoanCategoriesRepository)
    private loanCategoriesRepository: LoanCategoriesRepository
  ) {}

  async createLoanCategory(
    createLoanCantegoryDto: CreateLoanCategoryDto
  ): Promise<LoanCategories> {
    return this.loanCategoriesRepository.createLoanCategory(
      createLoanCantegoryDto
    );
  }

  async findLoanCategories(): Promise<LoanCategories[]> {
    return this.loanCategoriesRepository.findLoanCategories();
  }
}
