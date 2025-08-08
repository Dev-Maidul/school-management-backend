import jwt from 'jsonwebtoken';

// Generate Access Token
export const generateAccessToken = (userId: string) => {
  return jwt.sign({ id: userId }, process.env.JWT_ACCESS_SECRET as string, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES,
  });
};

// Generate Refresh Token
export const generateRefreshToken = (userId: string) => {
  return jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET as string, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES,
  });
};
