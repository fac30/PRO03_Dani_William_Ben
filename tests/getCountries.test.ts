import request from 'supertest';
import http from 'http';
import app from '../src/app';
import { db } from '../src/db_config/database';

jest.spyOn(console, 'log').mockImplementation(() => {});

jest.mock('../src/db_config/database', () => ({
  db: {
    query: jest.fn(),
    end: jest.fn().mockResolvedValue(undefined), // Mock db.end to return a resolved promise
  },
}));

describe('GET /countries', () => {
  let server: http.Server;

  // Start the server before tests
  beforeAll((done) => {
    server = http.createServer(app); // Create the server with the express app
    server.listen(3000, () => {
      console.log('Test server running on port 3000');
      done(); // Notify Jest that the server has started
    });
  });

  // Clean up after tests
  afterAll((done) => {
    // Close the database connection
    db.end()
      .then(() => {
        console.log('Database connection closed');
        // Close the Express server
        server.close(() => {
          console.log('Express server closed');
          done(); // Notify Jest that the server has closed
        });
      })
      .catch((error) => {
        console.error('Error closing database connection:', error);
        done(error); // Pass the error to Jest if something goes wrong
      });
  });

  it('should return a list of countries.', async () => {
    const mockData = [
      {
        id: 1,
        country: 'France',
        capital: 'Paris',
        capital_difficulty: 'easy',
        country_code: 'FR',
      },
      {
        id: 2,
        country: 'Germany',
        capital: 'Berlin',
        capital_difficulty: 'easy',
        country_code: 'DE',
      },
      {
        id: 3,
        country: 'Chad',
        capital: "N'Djamena",
        capital_difficulty: 'hard',
        country_code: 'TD',
      },
    ];

    // Mock db.query to return the mock data
    (db.query as jest.Mock).mockResolvedValue([mockData]);

    const response = await request(app).get('/countries');

    // Assert the response status
    expect(response.status).toBe(200);

    // Assert that the response body matches the mock data
    expect(response.body).toEqual(mockData);

    // Ensure that the correct query was executed
    expect(db.query).toHaveBeenCalledWith('SELECT * FROM countries');
  });

  it('should return status 500 and an error message when db.query fails.', async () => {
    (db.query as jest.Mock).mockRejectedValue(new Error('Database error'));

    const res = await request(app).get('/countries');

    // Assert that the response status is 500
    expect(res.status).toBe(500);

    // Assert that the response body contains the error message
    expect(res.body).toEqual({ error: 'Failed to fetch countries' });

    // Assert that the error was logged
    expect(console.log).toHaveBeenCalledWith(
      'Error fetching data: ',
      expect.any(Error),
    );
  });
});
