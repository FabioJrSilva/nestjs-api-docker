import { Body, Controller, Post } from '@nestjs/common';
import { CreateLoanSimulationDto } from './dtos/create.loan.simulation.dto';
import { LoanSimulationService } from './loan-simulation.service';

@Controller('loan-simulation')
export class LoanSimulationController {
  constructor(private loanSimulationService: LoanSimulationService) {}
  @Post()
  async store(@Body() createLoanSimulationDto: CreateLoanSimulationDto) {
    const simulation = await this.loanSimulationService.createLoanSimulation(
      createLoanSimulationDto
    );

    return {
      simulation,
      message: 'Simulação salva com sucesso.',
    };
  }
}
