import request from 'supertest';
import express from 'express';
import userRouter from '../src/routes/users';

const app = express();
app.use('/api/user', userRouter);

describe('User Routes', () => {
  // Test for GET /api/user/
  it('should return a message saying User endpoint is working', async () => {
    const response = await request(app).get('/api/user');
    expect(response.status).toBe(200);     
    expect(response.body).toEqual({ message: 'User endpoint is working' });  
  });

  // Test for GET /api/user/:id
  it('should return a message with the user ID', async () => {
    const userId = '123';
    const response = await request(app).get(`/api/user/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: `User with ID ${userId}` });
  });
});

