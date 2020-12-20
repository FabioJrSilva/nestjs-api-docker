import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import typeOrmConfig from './configs/typeorm.config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LoanCategoriesModule } from './loan-categories/loan-categories.module';
import { LoanSimulationModule } from './loan-simulation/loan-simulation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(typeOrmConfig()),
    UserModule,
    AuthModule,
    LoanCategoriesModule,
    LoanSimulationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
