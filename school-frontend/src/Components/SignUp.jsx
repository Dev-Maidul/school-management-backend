import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/dashboard'; // Default to /dashboard if no from state

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Client-side password validation
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', {
        name,
        email,
        password,
        role: 'Student',
      });

      if (response.status === 201) {
        const { accessToken, refreshToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        // Redirecting to the intended page
        setLoading(false);
        navigate(from, { replace: true });
      }
    } catch (err) {
      setLoading(false);
      setErrorMessage(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <motion.div
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl"
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Create a New Account
        </h1>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              placeholder="Enter your password"
              required
            />
          </div>
          {errorMessage && <p className="text-center text-red-500">{errorMessage}</p>}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-lg bg-indigo-600 p-3 text-white font-bold transition duration-300 ease-in-out hover:bg-indigo-700 disabled:bg-indigo-400"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </motion.button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-indigo-600 hover:underline">
            Log In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
