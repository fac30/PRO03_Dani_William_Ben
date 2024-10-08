import { Router } from 'express';
import { getQuiz, submitAnswer } from '../controllers/quizController';
import { checkAnswer } from '../services/quizService';

const router = Router();

router.get('/', getQuiz);
router.post('/:quizId/answer', submitAnswer);

// Route to validate the answer for a quiz
router.post('/validate', (req, res) => {
  const { quizId, questionId, selectedAnswer } = req.body;

  try {
    const result = checkAnswer(quizId, questionId, selectedAnswer);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error validating answer' });
  }
});

export default router;

