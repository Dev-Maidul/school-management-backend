import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    // Navigate to the quiz page to start the assessment
    navigate('/quiz');
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <motion.div 
        className="w-full max-w-xl rounded-xl bg-white p-8 shadow-2xl text-center"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard!</h1>
        <p className="text-lg text-gray-600 mb-6">
          You are ready to begin your digital competency assessment.
        </p>
        <motion.button
          onClick={handleStartQuiz}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Assessment
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Dashboard;
