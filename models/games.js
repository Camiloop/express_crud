import { Sequelize } from "sequelize";
import dB from "../config/database.js";

const { DataTypes } = Sequelize;

const Games = dB.define(
  "games",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "games",
  }
);

export default Games;
