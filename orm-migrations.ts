import 'dotenv/config';
import { DataSource } from 'typeorm';

const config = {
  type: 'postgres' as const,
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT as string),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: false,
  dropSchema: false,
  logging: true,
  useUTC: true,
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
};

export default new DataSource(config);
