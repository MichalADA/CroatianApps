# 🚀 Backend - Aplikacja do Nauki Chorwackiego

API backend dla aplikacji edukacyjnej do nauki języka chorwackiego.

## 📋 Stack

- **Node.js** 18+
- **Express.js** - framework HTTP
- **TypeScript** - typowanie
- **Prisma** - ORM do bazy danych
- **PostgreSQL** - baza danych
- **JWT** - autentykacja
- **bcryptjs** - hashing haseł

---

## 🚀 Szybki Start

### 1. Instalacja zależności
```bash
npm install
```

### 2. Setup bazy danych
```bash
# Przygotuj .env (powinien już istnieć)
# DATABASE_URL=postgresql://user:password@localhost:5432/db

# Uruchom migracje
npm run prisma:migrate
```

### 3. Development
```bash
npm run dev
```

Server powinien być dostępny na `http://localhost:3001`

### 4. Build i Production
```bash
npm run build
npm start
```

---

## 🐳 Docker

### Development (z hot-reload)
```bash
docker-compose -f docker-compose.dev.yml up
```

### Production
```bash
docker-compose up -d
```

---

## 📊 API Endpoints

### 🔐 Autentykacja

**POST** `/api/auth/register`
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "Imię"
}
```

**POST** `/api/auth/login`
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**GET** `/api/auth/me` (requires JWT token)
```
Headers: Authorization: Bearer <token>
```

---

### 📊 Postępy

**POST** `/api/progress/flashcard` (requires JWT)
```json
{
  "flashcardId": 1,
  "status": "mastered"  // new, learning, mastered
}
```

**POST** `/api/progress/game-score` (requires JWT)
```json
{
  "score": 100,
  "maxScore": 100
}
```

**GET** `/api/progress/stats` (requires JWT)

**GET** `/api/progress/history` (requires JWT)

---

## 🔐 JWT Token

Token jest zwracany przy logowaniu i rejestracji:
```json
{
  "token": "eyJhbGc...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "Imię"
  }
}
```

Używaj go w nagłówku `Authorization: Bearer <token>`

---

## 📁 Struktura Projektu

```
server/
├── src/
│   ├── server.ts              # Main entry point
│   ├── middleware/
│   │   └── auth.ts            # JWT middleware
│   ├── controllers/
│   │   ├── auth.ts            # Auth logic
│   │   └── progress.ts        # Progress logic
│   └── routes/
│       ├── auth.ts            # Auth routes
│       └── progress.ts        # Progress routes
├── prisma/
│   └── schema.prisma          # Database schema
├── Dockerfile                 # Docker image
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
└── .env                       # Environment variables
```

---

## 🛠️ Komendy

```bash
# Development
npm run dev                    # Uruchom z hot-reload (nodemon)

# Build
npm run build                  # TypeScript compilation

# Production
npm start                      # Uruchom compiled code

# Database
npm run prisma:generate        # Wygeneruj Prisma client
npm run prisma:migrate         # Uruchom migracje
npm run prisma:seed            # Załaduj dane testowe
```

---

## 🔧 Zmienne Środowiskowe

Plik `.env`:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/db"

# Server
NODE_ENV=development
PORT=3001

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d

# Frontend URL (CORS)
FRONTEND_URL=http://localhost:5173
```

---

## 📦 Baza Danych

### Models

**User**
- `id` - ID użytkownika
- `email` - Email
- `password` - Hashed password
- `name` - Imię
- `createdAt` - Data utworzenia

**Progress**
- `id` - ID rekordu
- `userId` - ID użytkownika
- `flashcardId` - ID fiszki (opcjonalnie)
- `flashcardStatus` - Status fiszki (new, learning, mastered)
- `gameScore` - Wynik gry
- `videoId` - ID wideo
- `type` - Typ aktywności (flashcard, game, video, song)

---

## 🐛 Troubleshooting

### Błąd: "connect ECONNREFUSED"
- Upewnij się że PostgreSQL działa
- Sprawdź `DATABASE_URL` w `.env`

### Błąd: "JWT token invalid"
- Sprawdź czy token nie wygasł
- Upewnij się że `JWT_SECRET` jest taki sam

### Błąd: "Port 3001 already in use"
```bash
# Linux/Mac
kill -9 $(lsof -t -i:3001)

# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F
```

---

## 📝 Notatki Deweloperskie

- Wszystkie hasła są hashowane za pomocą bcryptjs
- JWT tokeny wygasają po `JWT_EXPIRE` (domyślnie 7 dni)
- Baza danych jest inicjalizowana przez Prisma
- CORS jest skonfigurowany dla frontendu

---

## 🤝 Support

Jeśli masz pytania, sprawdź:
- Dokumentacja Prisma: https://www.prisma.io/docs/
- Dokumentacja Express: https://expressjs.com/
- JWT.io: https://jwt.io/

---

**Status:** ✅ Ready to use | 🔄 Development mode
