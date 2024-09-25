import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'data',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
});
