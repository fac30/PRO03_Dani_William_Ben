import { Request, Response } from 'express';
import { generateQuiz, checkAnswer } from '../services/quizService';

// GET /api/quiz
export const getQuiz = async (req: Request, res: Response) => {
  const { difficulty, type, numberOfQuestions } = req.query;

  // Validate query parameters
  if (!difficulty || !type || !numberOfQuestions) {
    return res.status(400).json({ error: 'Missing required query parameters.' });
  }

  const numQuestions = parseInt(numberOfQuestions as string);
  if (isNaN(numQuestions) || numQuestions <= 0) {
    return res.status(400).json({ error: 'Invalid number of questions.' });
  }

  try {
    // Call the service to generate the quiz
    const quiz = await generateQuiz(difficulty as string, type as string, numQuestions);
    res.json(quiz);
  } catch (error) {
    console.error('Error generating quiz:', error);
    res.status(500).json({ error: 'Failed to generate quiz' });
  }
};

// POST /api/quiz/:quizId/answer
export const submitAnswer = (req: Request, res: Response) => {
  const { quizId } = req.params;
  const { questionId, selectedAnswer } = req.body;

  // Validate request body
  if (!quizId || !questionId || !selectedAnswer) {
    return res.status(400).json({ error: 'Missing required parameters in the request body.' });
  }

  try {
    // Call the service to check the answer
    const result = checkAnswer(quizId, questionId, selectedAnswer);
    
    if (result.error) {
      // If the service returns an error (e.g., quiz not found), handle it here
      return res.status(400).json({ error: result.error });
    }

    res.json(result);
  } catch (error) {
    console.error('Error submitting answer:', error);
    res.status(500).json({ error: 'Failed to submit answer' });
  }
};

