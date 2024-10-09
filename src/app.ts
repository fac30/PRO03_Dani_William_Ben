import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import https from 'https';
import http from 'http';
import quizRoutes from './routes/quizRoutes';
import countryRoutes from './routes/countryRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const IS_PRODUCTION = process.env.IS_PRODUCTION;

app.use(cors({
  origin: 'http://localhost:5173',  
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use('/api/quiz', quizRoutes);
app.use('/countries', countryRoutes);

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

if (IS_PRODUCTION) {
  const sslCertPath = process.env.SSL_CERT_PATH;
  const sslKeyPath = process.env.SSL_KEY_PATH;

  if (sslCertPath && sslKeyPath) {
    const options = {
      cert: fs.readFileSync(sslCertPath),
      key: fs.readFileSync(sslKeyPath),
    };
    
    https.createServer(options, app).listen(443, () => {
      console.log(`Server is running with SSL on https://localhost:443`);
    });
  } else {
    console.error('SSL certificate paths are missing in the environment variables.');
  }
} else {
  http.createServer(app).listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;

