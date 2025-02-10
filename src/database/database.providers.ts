import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { Auth } from 'src/entity/auth.entity';


export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([
        Auth
      ]);
      sequelize.authenticate()
        .then(() => {
          console.log('Connection has been established successfully.');
        })
        .catch((error) => {
          console.error('Unable to connect to the database:', error);
        });
      await sequelize.sync();
      return sequelize;
    },
  },
];
