import { Router } from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getQuestions, submitAnswers } from '../controllers/quizController.js';

const router = Router();

// API to get questions for all three steps
router.post('/questions', protect, getQuestions);

// API to submit answers for all three steps
router.post('/submit', protect, submitAnswers);

export default router;
