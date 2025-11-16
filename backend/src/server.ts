import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/auth';
import progressRoutes from './routes/progress';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

// ============================================
// MIDDLEWARE
// ============================================
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

// ============================================
// HEALTH CHECK
// ============================================
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// ============================================
// API ROUTES
// ============================================
app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);

// ============================================
// TEST ROUTE
// ============================================
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Backend works!',
    timestamp: new Date().toISOString()
  });
});

// ============================================
// 404 HANDLER
// ============================================
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ============================================
// ERROR HANDLING
// ============================================
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// ============================================
// START SERVER
// ============================================
async function main() {
  try {
    // Test bazy danych
    await prisma.$queryRaw`SELECT 1`;
    console.log('✅ Baza danych połączona');

    app.listen(PORT, () => {
      console.log(`
╔════════════════════════════════════════╗
║  🚀 Backend uruchomiony!               ║
║  🇭🇷 Nauka Chorwackiego                ║
╠════════════════════════════════════════╣
║  API:  http://localhost:${PORT}         ║
║  ENV:  ${process.env.NODE_ENV}          ║
║  DB:   PostgreSQL                      ║
╚════════════════════════════════════════╝

📚 API Endpoints:
  🔐 Auth:
     POST   /api/auth/register
     POST   /api/auth/login
     GET    /api/auth/me

  📊 Progress:
     POST   /api/progress/flashcard
     POST   /api/progress/game-score
     GET    /api/progress/stats
     GET    /api/progress/history

  ❤️  Health:
     GET    /health
     GET    /api/test
      `);
    });
  } catch (error) {
    console.error('❌ Błąd uruchamiania:', error);
    process.exit(1);
  }
}

main();

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('🛑 Zamykam serwer...');
  await prisma.$disconnect();
  process.exit(0);
});
