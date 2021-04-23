import { Model, DataTypes } from 'sequelize';
import { database } from '../../../config/database';

export class IUser extends Model {
  public id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export interface IUserInterface {
  name: string;
}

IUser.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    sequelize: database, // this bit is important
  }
);

IUser.sync({ force: true }).then(() => console.log('Users table created'));
