import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: 'root',
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
});

async function runSqlScript(scriptPath: string) {
    const sql = fs.readFileSync(scriptPath, 'utf8');
    const statements = sql.split(';').map(stmt => stmt.trim()).filter(stmt => stmt);

    for (const statement of statements) {
        await db.query(statement);
    }
}

async function main() {
    try {
        await db.query('CREATE DATABASE IF NOT EXISTS data;');
        console.log('Database "data" created or already exists.');

        await db.query('USE data;');

        const scriptPath = path.join(__dirname, '../schema/schema.sql');
        await runSqlScript(scriptPath);
        console.log(`Executed SQL script from ${scriptPath}`);

        const [tables] = await db.query('SHOW TABLES;');
        console.log('Tables in database:', tables);
    } catch (error) {
        console.error('Error executing SQL:', error);
    } finally {
        await db.end();
    }
}

main();

