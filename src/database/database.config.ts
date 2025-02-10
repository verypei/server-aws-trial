import * as dotenv from 'dotenv';

import { IDatabaseConfig } from './interfaces/dbConfig.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      ssl: {
        require: true,  // Enable SSL
        rejectUnauthorized: false, // AWS RDS requires this setting
      },
    },
    logging: false,
    synchronize: true,
    sync: {
      force: false,
      alter: { drop: true },
    },
  }
};
