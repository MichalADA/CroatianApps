import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// ============================================
// SAVE FLASHCARD PROGRESS
// ============================================
export const saveFlashcardProgress = async (req: Request, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: 'Nie zalogowany' });
    }

    const { flashcardId, status } = req.body;
    // status: "new", "learning", "mastered"

    if (!flashcardId || !status) {
      return res.status(400).json({ 
        error: 'flashcardId i status są wymagane' 
      });
    }

    const progress = await prisma.progress.upsert({
      where: {
        // Potrzebujemy unique constraint - na razie uprościmy
        id: 0, // placeholder
      },
      update: {
        flashcardStatus: status,
        updatedAt: new Date(),
      },
      create: {
        userId: req.userId,
        flashcardId,
        flashcardStatus: status,
        type: 'flashcard',
      },
    });

    res.json({ 
      message: 'Postęp zapisany',
      progress 
    });
  } catch (error) {
    console.error('Save flashcard progress error:', error);
    res.status(500).json({ error: 'Błąd zapisywania postępu' });
  }
};

// ============================================
// SAVE GAME SCORE
// ============================================
export const saveGameScore = async (req: Request, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: 'Nie zalogowany' });
    }

    const { score, maxScore } = req.body;

    if (score === undefined || !maxScore) {
      return res.status(400).json({ 
        error: 'score i maxScore są wymagane' 
      });
    }

    const progress = await prisma.progress.create({
      data: {
        userId: req.userId,
        gameScore: score,
        type: 'game',
      },
    });

    res.json({ 
      message: 'Wynik gry zapisany',
      progress 
    });
  } catch (error) {
    console.error('Save game score error:', error);
    res.status(500).json({ error: 'Błąd zapisywania wyniku' });
  }
};

// ============================================
// GET USER STATISTICS
// ============================================
export const getUserStats = async (req: Request, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: 'Nie zalogowany' });
    }

    const progress = await prisma.progress.findMany({
      where: { userId: req.userId },
    });

    // Oblicz statystyki
    const stats = {
      totalSessions: progress.length,
      flashcardsLearned: progress.filter(p => p.type === 'flashcard').length,
      gamesPlayed: progress.filter(p => p.type === 'game').length,
      totalGameScore: progress
        .filter(p => p.type === 'game' && p.gameScore)
        .reduce((acc, p) => acc + (p.gameScore || 0), 0),
      avgGameScore: progress
        .filter(p => p.type === 'game' && p.gameScore)
        .length > 0
        ? Math.round(
            progress
              .filter(p => p.type === 'game' && p.gameScore)
              .reduce((acc, p) => acc + (p.gameScore || 0), 0) /
              progress.filter(p => p.type === 'game' && p.gameScore).length
          )
        : 0,
      videosWatched: progress.filter(p => p.type === 'video' && p.videoWatched).length,
      songsListened: progress.filter(p => p.type === 'song' && p.songListened).length,
    };

    res.json(stats);
  } catch (error) {
    console.error('Get user stats error:', error);
    res.status(500).json({ error: 'Błąd pobierania statystyk' });
  }
};

// ============================================
// GET USER PROGRESS
// ============================================
export const getUserProgress = async (req: Request, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: 'Nie zalogowany' });
    }

    const { type } = req.query;

    let where: any = { userId: req.userId };
    if (type) {
      where.type = type;
    }

    const progress = await prisma.progress.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    res.json(progress);
  } catch (error) {
    console.error('Get user progress error:', error);
    res.status(500).json({ error: 'Błąd pobierania postępów' });
  }
};
