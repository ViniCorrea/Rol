import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import entities from 'src/database/entities';

export function ormConfig(): TypeOrmModuleOptions {
  const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost' || process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '5432'),
    username: process.env.DB_USERNAME ?? 'admin',
    password: process.env.DB_PASSWORD ?? 'admin',
    database: process.env.DB_DATABASE ?? 'igreja',
    entities: entities,
    synchronize: process.env.NODE_ENV === 'production',
  };
  console.log('OrmConfig:'.yellow, JSON.stringify(config).dim);
  return config;
}

export default ormConfig();