# CroatianApps


# 🇭🇷 Aplikacja do Nauki Języka Chorwackiego

## 📋 Aktualny Stan Projektu

### ✅ Co już mamy (Front-end):
- React + TypeScript + Tailwind CSS
- 6 modułów edukacyjnych:
  - **Fiszki** - 20 słówek z tłumaczeniami
  - **Gramatyka** - podstawy języka chorwackiego
  - **Gry** - dopasowywanie słów
  - **Piosenki** - 6 utworów do nauki
  - **Wideo** - 8 lekcji (placeholdery)
  - **Strona główna** - nawigacja
- Mock data (wszystkie dane lokalne w plikach TS)
- Docker + docker-compose
- Responsywny design

---

## 🎯 Co Zamierzamy Zrobić

### FAZA 1: Backend API
- [ ] Serwer Node.js (Express/Fastify/NestJS)
- [ ] REST API lub GraphQL
- [ ] Baza danych (PostgreSQL/MongoDB)
- [ ] Endpointy dla:
  - Fiszek
  - Gier
  - Piosenek
  - Lekcji wideo
  - Gramatyki

### FAZA 2: Autentykacja
- [ ] Rejestracja użytkowników
- [ ] Logowanie (JWT)
- [ ] Profile użytkowników
- [ ] Reset hasła
- [ ] OAuth (Google/Facebook - opcjonalnie)

### FAZA 3: Śledzenie Postępów
- [ ] System zapisywania postępów
- [ ] Które fiszki zostały opanowane
- [ ] Wyniki gier
- [ ] Historia nauki
- [ ] Statystyki użytkownika
- [ ] Streak (dni nauki z rzędu)

### FAZA 4: Zaawansowane Funkcje
- [ ] **Spaced Repetition** - inteligentne powtórki
- [ ] **Własne zestawy fiszek** - użytkownik może dodawać
- [ ] **Quizy po lekcjach** - testy wiedzy
- [ ] **Osiągnięcia i odznaki** - gamifikacja
- [ ] **Rankingi** - porównanie z innymi
- [ ] **Prawdziwe wideo** - integracja YouTube API
- [ ] **Notatki** - użytkownik może robić notatki

### FAZA 5: Społeczność
- [ ] Komentarze pod lekcjami
- [ ] Forum pytań i odpowiedzi
- [ ] Udostępnianie własnych fiszek
- [ ] System rekomendacji

### FAZA 6: Premium Features
- [ ] Plan darmowy vs Premium
- [ ] Płatności (Stripe)
- [ ] Dodatkowe treści premium
- [ ] Lekcje 1-na-1 (booking system)
- [ ] Certyfikaty ukończenia

---

## 🏗️ Architektura Docelowa
```
┌─────────────────────────────────────────┐
│           FRONT-END (React)             │
│  - Komponenty UI                        │
│  - React Router                         │
│  - State Management (Context/Redux)     │
│  - API Client (Axios/React Query)       │
└─────────────────┬───────────────────────┘
                  │
                  │ HTTP/REST API
                  │
┌─────────────────▼───────────────────────┐
│           BACKEND (Node.js)             │
│  - Express/Fastify/NestJS               │
│  - JWT Authentication                   │
│  - Business Logic                       │
│  - Validation                           │
└─────────────────┬───────────────────────┘
                  │
                  │ SQL/NoSQL
                  │
┌─────────────────▼───────────────────────┐
│       DATABASE (PostgreSQL/MongoDB)     │
│  - Users                                │
│  - Flashcards                           │
│  - Progress                             │
│  - Game Results                         │
│  - User Content                         │
└─────────────────────────────────────────┘
```

---

## 🗃️ Planowana Struktura Bazy Danych

### Tabele/Kolekcje:
- **users** - użytkownicy
- **flashcards** - fiszki
- **user_progress** - postępy użytkownika
- **game_results** - wyniki gier
- **songs** - piosenki
- **videos** - lekcje wideo
- **grammar_lessons** - lekcje gramatyki
- **user_notes** - notatki użytkownika
- **achievements** - osiągnięcia
- **custom_flashcards** - własne fiszki użytkowników

---

## 🛠️ Stack Technologiczny (Planowany)

### Frontend (Obecny):
- React 18
- TypeScript
- Tailwind CSS
- React Router
- Vite

### Backend (Do dodania):
- Node.js 18+
- Express.js / NestJS
- TypeScript
- JWT (autentykacja)
- Bcrypt (hashowanie haseł)

### Baza Danych (Do wyboru):
- PostgreSQL + Prisma/TypeORM
- MongoDB + Mongoose

### Narzędzia:
- Docker Compose (multi-container)
- nginx (reverse proxy)
- Redis (cache - opcjonalnie)
- AWS S3 (pliki wideo - przyszłość)

---

## 📦 Deployment (Przyszłość)

### Frontend:
- Vercel / Netlify / AWS S3 + CloudFront

### Backend:
- AWS EC2 / Railway / Render
- Lub VPS (DigitalOcean, Hetzner)

### Baza Danych:
- AWS RDS (PostgreSQL)
- MongoDB Atlas
- Lub self-hosted na VPS

---

## 🚀 Kolejne Kroki

### Krok 1: Backend Setup
```bash
mkdir server
cd server
npm init -y
npm install express typescript @types/node
# Ustawienie podstawowego serwera
```

### Krok 2: Baza Danych
```bash
# PostgreSQL + Prisma
npm install prisma @prisma/client
npx prisma init
# Utworzenie schema.prisma
```

### Krok 3: API Endpoints
```
GET    /api/flashcards
POST   /api/flashcards
GET    /api/user/progress
POST   /api/auth/register
POST   /api/auth/login
```

### Krok 4: Połączenie Frontend z Backend
```typescript
// W React:
const API_URL = process.env.VITE_API_URL || 'http://localhost:3001'
const response = await fetch(`${API_URL}/api/flashcards`)
```

---

## 📝 Notatki Developerskie

### Obecne Mock Data:
- `src/data/flashcards.ts` - 20 fiszek
- `src/data/games.ts` - 10 par
- `src/data/songs.ts` - 6 piosenek
- `src/data/videos.ts` - 8 lekcji

### Do zastąpienia API:
Zamienić:
```typescript
import { flashcardsData } from '../data/flashcards'
```

Na:
```typescript
const { data } = await fetch('/api/flashcards')
```

---

## 🎓 Roadmapa

### Q1 2025:
- [x] Frontend MVP (GOTOWE)
- [ ] Backend API (podstawy)
- [ ] Baza danych setup
- [ ] Autentykacja użytkowników

### Q2 2025:
- [ ] Śledzenie postępów
- [ ] Spaced repetition
- [ ] Własne fiszki

### Q3 2025:
- [ ] Społeczność (forum, komentarze)
- [ ] Premium features
- [ ] Mobile app (React Native - opcjonalnie)

---

## 👥 Zespół / Wkład
- Frontend: ✅ READY
- Backend: 🔜 TO DO
- Database: 🔜 TO DO
- DevOps: 🔜 TO DO

---

## 📄 Licencja
Projekt edukacyjny - do ustalenia

---

**Status:** 🟢 Frontend GOTOWY | 🟡 Backend W PLANACH


