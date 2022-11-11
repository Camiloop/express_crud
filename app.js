// creacion de servidor
import express from "express";
import router from "./routes/routes.js";
import dB from "./config/database.js";
import cors from "cors";

const app = express();

// app.use(cors(corsOptions)); Esto crea un error por alguna razon :c

app.use(router);

app.listen(5000, () => {
  console.log("server running on localhost:5000...");
});

app.use(express.json());

const testConnection = async () => {
  try {
    await dB.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};






// metodo get

// app.get("/game", (request, response) => {
//   response.send("<h1>Hello World!</h1>");
// });

// app.get("/", (request, response) => {
//   response.status(200).send("Hello World!");
// });

// app.get("/", (request, response) => {
//   response.status(200).json({ user: "Camilo", age: "25" });
// });

// app.post("/suma", (request, response) => {
//   const { num1, num2 } = request.body;
//   const result = num1 + num2;

//   response.send({ message: result });
// });

// app.post("/resta", (request, response) => {
//   const { num1, num2 } = request.body;
//   const result = num1 - num2;
//   num1 < num2
//     ? response.send({ message: "num1 cannot be less than num2" })
//     : response.send({ message: result });
// });

// app.post("/multiplicacion", (request, response) => {
//   let { num1, num2 } = request.body;
//   num1 = Math.floor(Math.random() * 101);
//   num2 = Math.floor(Math.random() * 101);

//   const result = num1 * num2;

//   response.send({ message: result });
// });

// app.post("/division", (request, response) => {
//   const { num1, num2, num3, num4 } = request.body;
//   const total = num1 + num2 + num3 + num4;
//   const result = total / 4;

//   result === undefined
//     ? response.send({
//         message: "4 numbers are needed to complete this operation",
//       })
//     : response.send({ message: Math.round(result) });
// });
