import { Sequelize } from 'sequelize';

export const database = new Sequelize(
  {
    username: 'sa',
    password: 'KlOp9490',
    database: 'test-ts',
    host: 'localhost',
    dialect: 'mssql',
  }
  // {
  //     "development": {
  //       "username": "sa",
  //       "password": "KlOp9490",
  //       "database": "iwarehousedb",
  //       "host": "localhost",
  //       "dialect": "mssql"
  //     },
  //     "test": {
  //       "username": "root",
  //       "password": null,
  //       "database": "database_test",
  //       "host": "localhost",
  //       "dialect": "mssql"
  //     },
  //     "production": {
  //       "username": "root",
  //       "password": null,
  //       "database": "database_production",
  //       "host": "localhost",
  //       "dialect": "mssql"
  //     }
  //   }
);
