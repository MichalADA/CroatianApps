import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// ============================================
// REGISTER
// ============================================
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;

    // Validacja
    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Email i hasło są wymagane' 
      });
    }

    // Sprawdź czy email już istnieje
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({ 
        error: 'Email już jest zarejestrowany' 
      });
    }

    // Hash hasła
    const hashedPassword = await bcrypt.hash(password, 10);

    // Utwórz użytkownika
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || email.split('@')[0],
      },
    });

    // Wygeneruj JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    res.status(201).json({
      message: 'Rejestracja pomyślna',
      user: { id: user.id, email: user.email, name: user.name },
      token,
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Błąd rejestracji' });
  }
};

// ============================================
// LOGIN
// ============================================
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Validacja
    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Email i hasło są wymagane' 
      });
    }

    // Znajdź użytkownika
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ 
        error: 'Email lub hasło nieprawidłowe' 
      });
    }

    // Sprawdź hasło
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ 
        error: 'Email lub hasło nieprawidłowe' 
      });
    }

    // Wygeneruj JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    res.json({
      message: 'Logowanie pomyślne',
      user: { id: user.id, email: user.email, name: user.name },
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Błąd logowania' });
  }
};

// ============================================
// GET CURRENT USER
// ============================================
export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: 'Nie zalogowany' });
    }

    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: { id: true, email: true, name: true, createdAt: true },
    });

    res.json(user);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Błąd pobierania użytkownika' });
  }
};
