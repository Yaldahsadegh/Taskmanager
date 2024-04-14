import pg from "pg";
import "dotenv/config";

const db = new pg.Client({
  host: process.env.HOST,
  port: process.env.PORTDB,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

export default db;
