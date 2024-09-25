import { Request, Response } from 'express';
import { db } from '../db_config/database';

export const getCountries = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query('SELECT * FROM countries');
    res.json(rows);
  } catch (error) {
    console.log('Error fetching data: ', error);
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
};
