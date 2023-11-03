"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("./db");
const express = require("express");
const app = express();
const port = 3000;
db.connect()
    .then(() => {
    console.log("Connected to PostgreSQL database");
})
    .catch((error) => {
    console.error("Error connecting to PostgreSQL database:", error);
});
app.get("/", (req, res) => {
    res.send("Typescript API");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
