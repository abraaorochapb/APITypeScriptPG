"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.end = exports.query = exports.connect = void 0;
const pg_1 = require("pg");
require("dotenv").config();
const client = new pg_1.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432
});
const connect = () => client.connect();
exports.connect = connect;
const query = (text, params) => client.query(text, params);
exports.query = query;
const end = () => client.end();
exports.end = end;
