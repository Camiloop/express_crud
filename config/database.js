// conexion a base de datos
import { Sequelize } from "sequelize";

const dB = new Sequelize("postgres", "postgres", "admin", {
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