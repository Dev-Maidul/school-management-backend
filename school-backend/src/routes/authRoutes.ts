import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController.js'; // Corrected import
import { protect } from '../middleware/authMiddleware.js'; // Corrected import

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', protect, (req, res) => {
    res.json((req as any).user);
});

export default router;
