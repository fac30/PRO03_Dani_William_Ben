import { db } from '../db_config/database';
import { generateQuiz } from '../services/quizService';
import { RowDataPacket } from 'mysql2';

// Mock the database query method
jest.mock('../db_config/database', () => ({
  query: jest.fn(),
  getConnection: jest.fn().mockResolvedValue({
    ping: jest.fn().mockResolvedValue(true),
    release: jest.fn(),
  }),
  end: jest.fn(),
}));

describe('Database Interaction in generateQuiz', () => {
  it('should fetch countries from the database and generate a quiz', async () => {
    // Mock the database query to return sample data
    (db.query as jest.Mock).mockResolvedValueOnce([
      [
        { country: 'France', capital: 'Paris', capital_difficulty: 'easy', country_code: 'FR' },
        { country: 'Germany', capital: 'Berlin', capital_difficulty: 'easy', country_code: 'DE' },
      ] as RowDataPacket[],
    ]);

    const quiz = await generateQuiz('easy', 'country', 1);

    // Assertions on the generated quiz
    expect(quiz.questions).toHaveLength(1);
    expect(quiz.questions[0].questionText).toBe('What is the capital of France?');
  });
});

