import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "./routes/routes";

import dotenv from "dotenv";
dotenv.config();

const { SERVER_PORT = 8000 } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    code: "error",
    message: "Ocorreu um erro inesperado!",
    errName: err.name,
    errMessage: err.message,
  });
});

app.use("/api", routes);

app.listen(SERVER_PORT, () =>
  console.log(`⚡ Server is running in ${SERVER_PORT}`)
);
