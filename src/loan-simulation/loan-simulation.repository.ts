import { EntityRepository, Repository } from 'typeorm';
import { LoanSimulation } from '../models/LoanSimulation';
import { CreateLoanSimulationDto } from './dtos/create.loan.simulation.dto';

@EntityRepository(LoanSimulation)
export class LoanSimulationRepository extends Repository<LoanSimulation> {
  async createLoanSimulation(
    createLoanSimulationDto: CreateLoanSimulationDto
  ): Promise<LoanSimulation> {
    const simulation = await this.create(createLoanSimulationDto);
    const { date_birth } = createLoanSimulationDto;
    simulation.date_birth = new Date(date_birth).toLocaleDateString(
      process.env.DATE_LOCALE
    );
    await this.save(simulation);

    return simulation;
  }

  async findLoanSimulation() {
    return this.find();
  }
}
