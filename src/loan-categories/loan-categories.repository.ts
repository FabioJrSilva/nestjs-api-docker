import { ConflictException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { LoanCategories } from '../models/LoanCategories';
import { CreateLoanCategoryDto } from './dtos/create.loan.category.dto';

@EntityRepository(LoanCategories)
export class LoanCategoriesRepository extends Repository<LoanCategories> {
  async createLoanCategory(
    createLoaCategoryDto: CreateLoanCategoryDto
  ): Promise<LoanCategories> {
    let category = await this.findOne(createLoaCategoryDto);
    if (category) throw new ConflictException('A categoria já existe.');
    category = await this.create(createLoaCategoryDto);
    await this.save(category);

    return category;
  }

  async findLoanCategories() {
    return this.find();
  }
}
