import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanCategoriesController } from './loan-categories.controller';
import { LoanCategoriesRepository } from './loan-categories.repository';
import { LoanCategoriesService } from './loan-categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([LoanCategoriesRepository])],
  controllers: [LoanCategoriesController],
  providers: [LoanCategoriesService],
})
export class LoanCategoriesModule {}
