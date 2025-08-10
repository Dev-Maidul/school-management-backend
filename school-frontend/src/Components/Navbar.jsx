// src/components/Navbar.jsx
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '../Context/AuthProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logOut();
  };

  // Animation variants
  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 40, delay: 0.1 } },
    closed: { opacity: 0, y: "-100%", transition: { type: "spring", stiffness: 400, damping: 40 } }
  };
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };
  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" },
    tap: { scale: 0.95 },
  };
  
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 p-4 shadow-xl font-sans"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div variants={navItemVariants} initial="hidden" animate="visible" className="text-white text-3xl font-bold tracking-wider">
          <Link to="/">Test School</Link>
        </motion.div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <motion.div variants={navItemVariants} initial="hidden" animate="visible">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg">
              Home
            </Link>
          </motion.div>
          
          {user ? (
            <>
              <motion.div variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
                <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg cursor-pointer">
                  Dashboard
                </Link>
              </motion.div>
              <motion.div variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
                <motion.button
                  onClick={handleLogout}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full font-bold transition-all duration-300 transform cursor-pointer"
                >
                  Logout
                </motion.button>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg cursor-pointer">
                  Login
                </Link>
              </motion.div>
              <motion.div variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
                <Link to="/signup">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full font-bold transition-all duration-300 transform cursor-pointer"
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </motion.div>
            </>
          )}
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none p-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              {isOpen ? (
                <motion.path key="close" initial={{ rotate: 0 }} animate={{ rotate: 180 }} exit={{ rotate: 0 }} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <motion.path key="open" initial={{ rotate: 0 }} animate={{ rotate: 180 }} exit={{ rotate: 0 }} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-gray-800 p-4 space-y-3 mt-2 rounded-lg shadow-inner"
          >
            <Link to="/" className="text-gray-300 block text-lg hover:text-white p-2 rounded transition-colors duration-300 cursor-pointer">
              Home
            </Link>
            
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-300 block text-lg hover:text-white p-2 rounded transition-colors duration-300 cursor-pointer">
                  Dashboard
                </Link>
                <motion.button onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full font-bold transition-all duration-300 transform">
                  Logout
                </motion.button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-300 block text-lg hover:text-white p-2 rounded transition-colors duration-300 cursor-pointer">
                  Login
                </Link>
                <Link to="/signup" className="text-gray-300 block text-lg hover:text-white p-2 rounded transition-colors duration-300">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full font-bold transition-all duration-300 transform">
                    Sign Up
                  </motion.button>
                </Link>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;