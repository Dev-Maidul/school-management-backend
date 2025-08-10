// src/Context/AuthProvider.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // User details fetch
  const fetchUser = async (accessToken) => {
    try {
      const response = await axios.get('http://localhost:3000/api/auth/profile', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUser(response.data);
    } catch (err) {
      console.error('Failed to fetch user:', err);
      setUser(null);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
    setLoading(false);
  };

  // Login function to set user state
  const login = async (accessToken, refreshToken) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    await fetchUser(accessToken);
  };

  // Logout function to clear user state
  const logOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
  };

  // Check for tokens on initial load
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      fetchUser(accessToken);
    } else {
      setLoading(false);
    }
  }, []);

  const authInfo = {
    user,
    loading,
    login,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
