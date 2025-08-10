import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast'; // Import toast and Toaster

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/dashboard'; // Default to /dashboard if no from state

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        // Add success toast notification
        toast.success('Successfully logged in!');

        // Redirecting after a short delay for the toast to be seen
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1000);
      }
    } catch (err) {
      setLoading(false);
      // Add error toast notification
      toast.error(err.response?.data?.message || 'Login failed. Invalid email or password.');
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <motion.div
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Welcome Back! Log In
        </h1>
        <form onSubmit={handleSignIn} className="space-y-4">
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
          <div className="text-right">
            <Link to="/forgot-password" className="text-sm text-indigo-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          {error && <p className="text-center text-red-500">{error}</p>}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-lg bg-indigo-600 p-3 font-bold text-white transition duration-300 ease-in-out hover:bg-indigo-700 disabled:bg-indigo-400"
            disabled={loading}
          >
            {loading ? 'Logging In...' : 'Log In'}
          </motion.button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
      </motion.div>
      <Toaster />
    </div>
  );
};

export default Login;
