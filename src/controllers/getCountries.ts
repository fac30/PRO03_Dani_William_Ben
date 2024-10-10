import { Request, Response } from 'express';
import { db } from '../db_config/database';
import data from '../../data/countries.json';
import { RowDataPacket } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

interface Country {
  country: string;
  capital: string;
  capital_difficulty: string;
  country_code: string;
}

export const getCountries = async (req: Request, res: Response) => {
  try {
    const { capital_difficulty } = req.query;
    let query: string = 'SELECT * FROM countries';
    const queryParams = [];

    if (capital_difficulty) {
      query += ' WHERE capital_difficulty = ?';
      queryParams.push(capital_difficulty);
    }
    const isOffline = process.env.IS_PRODUCTION;

    if (isOffline) {
      console.log('Running in offline mode, using fallback JSON data.');
      const filteredData = data.filter((country: Country) =>
        capital_difficulty
          ? country.capital_difficulty === capital_difficulty
          : true,
      );
      return res.json(filteredData);
    }
    const [rows]: [RowDataPacket[], any] = await db.query(query, queryParams);
    if (rows.length === 0 && !process.env.IS_PRODUCTION) {
      console.log('No database results, using fallback JSON data.');
      const filteredData = data.filter((country: Country) =>
        capital_difficulty
          ? country.capital_difficulty === capital_difficulty
          : true,
      );
      return res.json(filteredData);
    }
    res.json(rows);
  } catch (error) {
    console.log('Error fetching data: ', error);
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
};
