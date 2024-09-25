import { Router } from 'express';
import { getQuiz, submitAnswer } from '../controllers/quizController';

const router = Router();

router.get('/', getQuiz);

router.post('/:quizId/answer', submitAnswer);

export default router;

