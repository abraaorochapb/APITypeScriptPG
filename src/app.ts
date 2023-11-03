import { Express, Request, Response } from "express";
import * as db from "./db";

const express = require("express");
const app: Express = express();
const port = 3000;

db.connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch((error) => {
    console.error("Error connecting to PostgreSQL database:", error);
  });

app.get("/", (req: Request, res: Response) => {
    res.send("Typescript API");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
