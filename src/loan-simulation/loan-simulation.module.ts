import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanSimulationController } from './loan-simulation.controller';
import { LoanSimulationService } from './loan-simulation.service';
import { LoanSimulationRepository } from './loan-simulation.repository';
import { LoanCategoriesRepository } from 'src/loan-categories/loan-categories.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      LoanSimulationRepository,
      LoanCategoriesRepository,
    ]),
  ],
  controllers: [LoanSimulationController],
  providers: [LoanSimulationService],
})
export class LoanSimulationModule {}
