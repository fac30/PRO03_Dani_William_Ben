import { Router, Request, Response } from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import userRouter from './users';

const router = Router();

// example route 01
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'API is working' });
});

//example modularised route: 
router.use('/users', userRouter);


export default router;

