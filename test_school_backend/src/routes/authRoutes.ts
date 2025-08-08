// src/routes/authRoutes.ts
import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);


router.get('/profile', protect, (req, res) => {
    res.json((req as any).user);
});

export default router;