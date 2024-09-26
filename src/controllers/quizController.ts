import { Request, Response } from 'express';
import { generateQuiz, checkAnswer } from '../services/quizService';

// // GET /api/quiz
// export const getQuiz = (req: Request, res: Response) => {
//   const { difficulty, type, numberOfQuestions } = req.query;
//
//   const quiz = generateQuiz(
//     difficulty as string,
//     type as string,
//     parseInt(numberOfQuestions as string)
//   );
//
//   res.json(quiz);
// };
//

// GET /api/quiz
export const getQuiz = async (req: Request, res: Response) => {
  const { difficulty, type, numberOfQuestions } = req.query;

  try {
    const quiz = await generateQuiz(
      difficulty as string,
      type as string,
      parseInt(numberOfQuestions as string)
    );

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

  const result = checkAnswer(quizId, questionId, selectedAnswer);

  res.json(result);
};

