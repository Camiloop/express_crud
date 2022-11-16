import { Sequelize } from "sequelize";
import dB from "../config/database.js";

const { DataTypes } = Sequelize;

const Users = dB.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.INTEGER,
    },
    password: {
      type: DataTypes.STRING,
    },
    createdON: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      field: 'created_on'
    },
    followersNumber: {
      type: DataTypes.INTEGER,
    }
  }, {
    tableName: 'users'
  }
)

export default Users;