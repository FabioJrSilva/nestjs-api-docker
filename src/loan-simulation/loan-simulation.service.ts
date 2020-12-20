import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoanCategoriesRepository } from 'src/loan-categories/loan-categories.repository';
import { LoanSimulation } from 'src/models/LoanSimulation';
import { CreateLoanSimulationDto } from './dtos/create.loan.simulation.dto';
import { LoanSimulationRepository } from './loan-simulation.repository';

@Injectable()
export class LoanSimulationService {
  constructor(
    @InjectRepository(LoanSimulationRepository)
    private loanSimulationRepository: LoanSimulationRepository,
    private loanCategoriesRepository: LoanCategoriesRepository
  ) {}

  async createLoanSimulation(
    createLoanSimulationDto: CreateLoanSimulationDto
  ): Promise<LoanSimulation> {
    const { purpose } = createLoanSimulationDto;
    const category = await this.loanCategoriesRepository.findOne({
      name: purpose,
    });
    if (!category) throw new NotFoundException('Propósito não encontrado');

    return this.loanSimulationRepository.createLoanSimulation(
      createLoanSimulationDto
    );
  }
}
