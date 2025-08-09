import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ResultsPage = () => {
  const location = useLocation();
  const { result } = location.state || { result: null };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } },
  };

  if (!result) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <motion.div
          className="w-full max-w-xl rounded-xl bg-white p-8 shadow-2xl text-center"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h1 className="text-3xl font-bold text-red-600 mb-4">No results found.</h1>
          <p className="text-lg text-gray-600 mb-6">Please take the quiz first.</p>
          <Link to="/dashboard" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Go to Dashboard
          </Link>
        </motion.div>
      </div>
    );
  }

  const { percentage, certificationLevel } = result;
  const isCertified = certificationLevel !== 'Failed';
  
  let message;
  if (isCertified) {
    message = `Congratulations! You are certified at level ${certificationLevel}.`;
  } else {
    message = 'You did not pass this assessment.';
  }

  const resultColor = isCertified ? 'text-green-600' : 'text-red-600';

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <motion.div
        className="w-full max-w-xl rounded-xl bg-white p-8 shadow-2xl text-center"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <h1 className={`text-4xl font-bold mb-4 ${resultColor}`}>Quiz Results</h1>
        <p className="text-lg text-gray-600 mb-4">
          Your score: <span className="font-bold">{percentage.toFixed(2)}%</span>
        </p>
        <p className={`text-xl font-semibold mb-6 ${resultColor}`}>
          {message}
        </p>
        <Link to="/dashboard" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
          Back to Dashboard
        </Link>
      </motion.div>
    </div>
  );
};

export default ResultsPage;
