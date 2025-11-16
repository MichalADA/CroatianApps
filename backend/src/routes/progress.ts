import { Router } from 'express';
import { 
  saveFlashcardProgress, 
  saveGameScore, 
  getUserStats, 
  getUserProgress 
} from '../controllers/progress';
import { authMiddleware } from '../middleware/auth';

const router = Router();

// Wszystkie routes wymagają autentykacji
router.use(authMiddleware);

// POST /api/progress/flashcard
router.post('/flashcard', saveFlashcardProgress);

// POST /api/progress/game-score
router.post('/game-score', saveGameScore);

// GET /api/progress/stats
router.get('/stats', getUserStats);

// GET /api/progress/history
router.get('/history', getUserProgress);

export default router;
