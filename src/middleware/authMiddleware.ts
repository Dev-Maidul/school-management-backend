import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const protect = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  token = token.split(' ')[1]; // Bearer <token>
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET as string);
    req.user = decoded; 
    next();
  } catch (error) {
    res.status(401).json({ message: 'Not authorized' });
  }
};
