import express from 'express';
import bodyParser from 'body-parser';
import quizRoutes from './routes/quizRoutes';
import countryRoutes from './routes/countryRoutes';
import dotenv from 'dotenv';
import path from 'path';
import { Request, Response, NextFunction } from 'express';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

function logger(request: Request, response: Response, next: NextFunction) {
  console.log(`${request.method} ${request.url}`);
  next();
}
app.use(logger);

// CHECK
app.use(bodyParser.json());

app.use('/api/quiz', quizRoutes);
app.use('/countries', countryRoutes);
// Loading assets
app.use(express.static(path.join(__dirname, '../frontend')));

/* app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); */

// fix for cors?
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

export default app;
