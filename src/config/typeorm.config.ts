import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'db.sqlite3',
  entities: [__dirname + '../**/*.entity{.ts,.js}'], // Updated path
  synchronize: true,
};
