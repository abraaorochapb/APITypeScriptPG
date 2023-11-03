import { Client } from "pg";
require("dotenv").config();

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port : 5432
});

export const connect = () => client.connect();

export const query = (text: string, params: any[]) => client.query(text, params);

export const end = () => client.end();
