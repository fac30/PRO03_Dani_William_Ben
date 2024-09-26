import { generateQuiz } from '../src/services/quizService';


// Testing
// 1. For: generateQuiz()
// 2. Given: a difficulty: string, a quiz type: string, a number of questions: number
// 3. Should: Return a quiz 



// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { country: 'France', capital: 'Paris', capital_difficulty: 'easy', country_code: 'FR' },
        { country: 'Germany', capital: 'Berlin', capital_difficulty: 'easy', country_code: 'DE' },
        { country: 'Spain', capital: 'Madrid', capital_difficulty: 'easy', country_code: 'ES' },
        { country: 'Italy', capital: 'Rome', capital_difficulty: 'easy', country_code: 'IT' },
      ]),
  })
) as jest.Mock;

describe('generateQuiz Integration Test', () => {
  it('should generate a quiz with the correct number of questions', async () => {
    const quiz = await generateQuiz('easy', 'country', 3);

    expect(quiz.questions).toHaveLength(3);
    quiz.questions.forEach((question) => {
      expect(question).toHaveProperty('questionId');
      expect(question).toHaveProperty('questionText');
      expect(question).toHaveProperty('options');
      expect(question).toHaveProperty('correctAnswer');
    });

    quiz.questions.forEach((question) => {
      expect(question.options).toContain(question.correctAnswer);
      expect(question.options).toHaveLength(4); // Three incorrect options + correct one
    });
  });

  it('should handle API errors gracefully', async () => {
    // Suppress console.error for this test
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Mock the fetch function to simulate a failure
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error('API failure'))
    );

    await expect(generateQuiz('easy', 'country', 3)).rejects.toThrow('Failed to generate quiz');

    // Restore console.error after the test
    consoleErrorSpy.mockRestore();
  });
});

