import "reflect-metadata";
import 'express-async-errors';

import express, { NextFunction, Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { router } from "./routes";
import cors from "cors";

createConnection().then(() => {
  const app = express();
  app.use(cors());

  const PORT = 4000;

  app.use(express.json());
  app.use(router);

  app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message
      })
    }
  
    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error'
    })
  })

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
  })
}).catch((error) => {
  console.log("Unable to connect to the database", error)
})
