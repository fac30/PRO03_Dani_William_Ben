import request from 'supertest';
import express from 'express';
import routes from '../src/routes';

const app = express();
app.use('/api', routes);

describe('GET /api', () => {
  it('should return a message saying API is working', async () => {
    const response = await request(app).get('/api');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('API is working');
  });
});

