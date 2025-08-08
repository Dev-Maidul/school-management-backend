// src/utils/generateTokens.ts
import jwt from 'jsonwebtoken';

const generateAccessToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_ACCESS_SECRET!, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES
    });
};

const generateRefreshToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_REFRESH_SECRET!, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRES
    });
};

export { generateAccessToken, generateRefreshToken };