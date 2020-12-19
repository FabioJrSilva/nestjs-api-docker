import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LoanCategories } from 'src/models/LoanCategories';
import { User } from 'src/models/user.model';

export default () => {
  const typeConfig: TypeOrmModuleOptions = {
    // @ts-ignore
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [User, LoanCategories],
    synchronize: true,
    migrations: [__dirname + '/../**/*.migrations.{js,ts}'],
  };

  return typeConfig;
};
