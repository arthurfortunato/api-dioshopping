import "reflect-metadata";
import express from 'express';
import { createConnection } from 'typeorm';
import { router } from "./routes";
import cors from "cors";

createConnection().then(() => {
  const app = express();
  const PORT = 4000;

  app.use(express.json());
  app.use(router);
  app.use(cors());

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
  })
}).catch((error) => {
  console.log("Unable to connect to the database", error)
})
