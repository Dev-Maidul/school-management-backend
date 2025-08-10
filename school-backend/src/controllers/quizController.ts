import { Request, Response } from 'express';
import Question, { IQuestion } from '../models/Question.js';
import TestSession from '../models/TestSession.js';

// @desc    Get questions for a specific step
// @route   POST /api/quiz/questions
// @access  Private
const getQuestions = async (req: Request, res: Response) => {
  const { currentStep } = req.body;
  let levels: string[];
  
  if (currentStep === 1) {
    levels = ['A1', 'A2'];
  } else if (currentStep === 2) {
    levels = ['B1', 'B2'];
  } else if (currentStep === 3) {
    levels = ['C1', 'C2'];
  } else {
    return res.status(400).json({ message: 'Invalid step provided' });
  }

  try {
    const questions: IQuestion[] = await Question.find({ level: { $in: levels } });
    if (questions.length === 0) {
      return res.status(404).json({ message: 'No questions found for this level.' });
    }
    
    // Randomly shuffle the questions and return 44 questions per step
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 44);
    res.json(shuffledQuestions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Submit answers for a specific step and calculate score
// @route   POST /api/quiz/submit
// @access  Private
const submitAnswers = async (req: Request, res: Response) => {
  const { answers, currentStep } = req.body;
  const user = (req as any).user;

  if (!user) {
    return res.status(401).json({ message: 'User not authenticated' });
  }

  try {
    const questions: IQuestion[] = await Question.find({ _id: { $in: answers.map((a: any) => a.questionId) } });
    let score = 0;
    const totalQuestions = questions.length;

    questions.forEach(q => {
      const userAnswer = answers.find((a: any) => a.questionId.toString() === q._id.toString());
      if (userAnswer && userAnswer.answer === q.correctAnswer) {
        score++;
      }
    });

    const percentage = (score / totalQuestions) * 100;
    let certificationLevel: string = 'Failed';

    if (currentStep === 1) {
      if (percentage >= 75) certificationLevel = 'A2';
      else if (percentage >= 50) certificationLevel = 'A2';
      else if (percentage >= 25) certificationLevel = 'A1';
    } else if (currentStep === 2) {
      if (percentage >= 75) certificationLevel = 'B2';
      else if (percentage >= 50) certificationLevel = 'B2';
      else if (percentage >= 25) certificationLevel = 'B1';
      else certificationLevel = 'A2'; // Remain at A2 if score < 25%
    } else if (currentStep === 3) {
      if (percentage >= 50) certificationLevel = 'C2';
      else if (percentage >= 25) certificationLevel = 'C1';
      else certificationLevel = 'B2'; // Remain at B2 if score < 25%
    }

    const testSession = await TestSession.create({
      user: user._id,
      level: certificationLevel,
      score: percentage,
      completed: true,
      currentStep: currentStep,
    });
    
    const canProceed = (currentStep === 1 && percentage >= 75) || (currentStep === 2 && percentage >= 75);

    res.status(200).json({
      score,
      percentage,
      certificationLevel,
      testSession,
      canProceed,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export { getQuestions, submitAnswers };
