import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class LoanSimulation {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 255 })
  name: string;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 255 })
  cpf: string;

  @ApiProperty()
  @Column({ nullable: false })
  amount: number;

  @ApiProperty()
  @Column({ nullable: false })
  period: number;

  @ApiProperty()
  @Column({ nullable: false })
  purpose: string;

  @ApiProperty()
  @Column({ nullable: false })
  date_birth: string;

  @ApiProperty()
  @Column({ nullable: false })
  sex: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
