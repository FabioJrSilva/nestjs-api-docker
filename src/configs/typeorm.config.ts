import { TypeOrmModuleOptions } from '@nestjs/typeorm';
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
    entities: [__dirname + '/../**/*.model.{js,ts}'],
  };

  return typeConfig;
};
