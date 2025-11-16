import { Router } from 'express';
import { register, login, getCurrentUser } from '../controllers/auth';
import { authMiddleware } from '../middleware/auth';

const router = Router();

// POST /api/auth/register
router.post('/register', register);

// POST /api/auth/login
router.post('/login', login);

// GET /api/auth/me (protected)
router.get('/me', authMiddleware, getCurrentUser);

export default router;
