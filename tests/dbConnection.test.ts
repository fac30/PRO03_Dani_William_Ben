import { db } from '../src/db_config/database';

describe('Database Connection', () => {
  it('should establish a connection to the database successfully', async () => {
    try {
      const connection = await db.getConnection();
      await connection.ping();       
      connection.release();       
      expect(true).toBe(true);
    } catch (error) {
      console.error('Database connection failed:', error);
      throw new Error('Failed to connect to the database');
    }
  });

  afterAll(async () => {
    await db.end();
  });
});

