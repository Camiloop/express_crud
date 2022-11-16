// Conexion a base de datos

import { Sequelize } from "sequelize";

const dB = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: "localhost",
  port: "5432",
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

const testConnection = async () => {
  try {
    await dB.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

console.log(testConnection());

export default dB;