import { Express, Request, Response } from "express";

const express = require("express");
const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Typescript API");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
