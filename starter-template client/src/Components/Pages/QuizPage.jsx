import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const QuizPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(60); // 1 minute per question
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Fetch questions from the backend based on currentStep
  const { isLoading, error } = useQuery({
    queryKey: ['quizQuestions', currentStep],
    queryFn: async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        throw new Error('No access token found.');
      }
      const response = await axios.post('http://localhost:3000/api/quiz/questions', { currentStep }, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setQuestions(response.data);
      return response.data;
    },
    enabled: !!user && !isTestFinished,
  });

  // Timer logic
  useEffect(() => {
    if (questions.length === 0 || isTestFinished) return;

    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          handleNextQuestion();
          return 60;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestionIndex, questions, isTestFinished]);

  // Handle answer selection
  const handleAnswerSelect = (option) => {
    setAnswers({
      ...answers,
      [questions[currentQuestionIndex]._id]: option,
    });
  };

  // Move to the next question or submit the test
  const handleNextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(60);
    } else {
      const accessToken = localStorage.getItem('accessToken');
      try {
        const response = await axios.post('http://localhost:3000/api/quiz/submit', {
          answers: Object.keys(answers).map(questionId => ({
            questionId,
            answer: answers[questionId],
          })),
          currentStep,
        }, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        toast.success(`Test finished! Your score: ${response.data.percentage.toFixed(2)}%`);
        
        // If the user passes, move to the next step
        if (response.data.canProceed && currentStep < 3) {
          setCurrentStep(currentStep + 1);  // Proceed to the next step
          setCurrentQuestionIndex(0);  // Start from the first question of the next step
          setAnswers({});  // Reset answers
          setTimer(60);  // Reset timer
          toast.info(`Proceeding to Step ${currentStep + 1}!`);
        } else {
          // If the user fails or completes all steps, finish the quiz
          setIsTestFinished(true);
          navigate('/results', { state: { result: response.data } });
        }
      } catch (err) {
        toast.error('Failed to submit test.');
      }
    }
  };

  if (isLoading) return <div className="text-center p-8">Loading questions...</div>;
  if (error) return <div className="text-center p-8 text-red-500">Error fetching questions: {error.message}</div>;
  if (isTestFinished) return <div className="text-center p-8 text-green-600 font-bold text-2xl">Test completed! Redirecting to results...</div>;
  if (questions.length === 0) return <div className="text-center p-8">No questions available.</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-2xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            Question {currentQuestionIndex + 1} of {questions.length} (Step {currentStep})
          </h2>
          <div className="text-lg font-bold text-red-600">
            Time Remaining: {timer}s
          </div>
        </div>
        <div className="mb-8">
          <p className="text-lg font-semibold">{currentQuestion.text}</p>
        </div>
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ease-in-out
                ${answers[currentQuestion._id] === option ? 'bg-indigo-600 text-white border-indigo-700' : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-indigo-100'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {option}
            </motion.button>
          ))}
        </div>
        <div className="mt-8 text-right">
          <motion.button
            onClick={handleNextQuestion}
            className="bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 hover:bg-green-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit Test'}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizPage;
