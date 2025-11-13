# 🇭🇷 Aplikacja do Nauki Języka Chorwackiego

Interaktywna aplikacja webowa do nauki języka chorwackiego, zbudowana w React + TypeScript + Tailwind CSS.

## 📋 Spis treści

- [Opis projektu](#opis-projektu)
- [Funkcje](#funkcje)
- [Technologie](#technologie)
- [Instalacja](#instalacja)
- [Uruchomienie](#uruchomienie)
- [Struktura projektu](#struktura-projektu)
- [Przyszłe rozszerzenia](#przyszłe-rozszerzenia)

## 🎯 Opis projektu

Aplikacja do nauki języka chorwackiego zawiera 5 głównych modułów edukacyjnych:

1. **Fiszki** - Interaktywny trener słówek z przykładowymi zdaniami
2. **Gramatyka** - Lekcje podstaw gramatyki chorwackiej (alfabet, rodzaje, czasowniki)
3. **Gry** - Gra w dopasowywanie słów chorwackich do polskich tłumaczeń
4. **Piosenki** - Lista chorwackich piosenek z linkami do YouTube
5. **Wideo** - Kolekcja lekcji wideo dla różnych poziomów zaawansowania

## ✨ Funkcje

### Fiszki
- 20 słówek po chorwacku z tłumaczeniami
- Przykładowe zdania z tłumaczeniami
- Przycisk "Pokaż tłumaczenie"
- Nawigacja poprzednia/następna karta
- Wskaźnik postępu

### Gramatyka
- Alfabet i wymowa (litery specjalne)
- Rodzaje rzeczowników (męski, żeński, nijaki)
- Odmiana podstawowych czasowników (biti, ići, raditi)
- Podstawowe zwroty

### Gry
- Gra w dopasowywanie par (chorwacki ↔ polski)
- System punktacji
- Wizualna informacja zwrotna (kolory dla poprawnych/błędnych odpowiedzi)
- Licznik dopasowanych par
- Możliwość resetowania gry

### Piosenki
- Lista 6 chorwackich piosenek
- Poziomy trudności (łatwy/średni/trudny)
- Linki do YouTube (placeholdery)
- Wskazówki jak uczyć się z piosenek

### Wideo
- 8 lekcji wideo z placeholderami
- Podział na poziomy (początkujący/średniozaawansowany/zaawansowany)
- Czas trwania każdej lekcji
- Responsywny układ siatki

## 🛠 Technologie

- **React 18.2** - Biblioteka UI
- **TypeScript 5.3** - Typowanie statyczne
- **React Router 6.20** - Routing
- **Tailwind CSS 3.3** - Stylowanie
- **Vite 5.0** - Build tool i dev server

## 📥 Instalacja

### Wymagania wstępne

**Opcja 1: Tradycyjna (npm)**
- Node.js (wersja 18 lub nowsza)
- npm lub yarn

**Opcja 2: Docker (ZALECANA)**
- Docker (wersja 20.10+)
- Docker Compose (wersja 2.0+)

### Kroki instalacji

#### Metoda 1: Z npm

1. Sklonuj repozytorium (lub rozpakuj archiwum):
```bash
cd croatian-learning-app
```

2. Zainstaluj zależności:
```bash
npm install
```

#### Metoda 2: Z Docker (bez instalacji Node.js)

1. Przejdź do katalogu projektu:
```bash
cd croatian-learning-app
```

2. Uruchom aplikację:
```bash
docker-compose up -d
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

**📖 Szczegółowa dokumentacja Docker**: Zobacz plik [DOCKER.md](DOCKER.md)

## 🚀 Uruchomienie

### Tryb deweloperski (npm)

Uruchom serwer deweloperski:
```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:5173`

### Tryb deweloperski (Docker)

Uruchom z hot-reload:
```bash
docker-compose -f docker-compose.dev.yml up
```

Aplikacja będzie dostępna pod adresem: `http://localhost:5173`

### Build produkcyjny (npm)

Zbuduj aplikację do wdrożenia:
```bash
npm run build
```

Pliki produkcyjne zostaną wygenerowane w katalogu `dist/`.

### Produkcja (Docker)

Uruchom zoptymalizowaną wersję:
```bash
docker-compose up -d
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

### Podgląd buildu (npm)

Aby zobaczyć podgląd zbudowanej aplikacji:
```bash
npm run preview
```

## 📁 Struktura projektu

```
croatian-learning-app/
├── public/                 # Pliki statyczne
├── src/
│   ├── components/        # Komponenty React
│   │   └── NavBar.tsx    # Pasek nawigacyjny
│   ├── data/             # Dane mockowe
│   │   ├── flashcards.ts # Dane fiszek
│   │   ├── games.ts      # Dane gier
│   │   ├── songs.ts      # Dane piosenek
│   │   └── videos.ts     # Dane wideo
│   ├── pages/            # Strony aplikacji
│   │   ├── Home.tsx      # Strona główna
│   │   ├── Flashcards.tsx # Moduł fiszek
│   │   ├── Grammar.tsx    # Moduł gramatyki
│   │   ├── Games.tsx      # Moduł gier
│   │   ├── Songs.tsx      # Moduł piosenek
│   │   └── Videos.tsx     # Moduł wideo
│   ├── types/            # Typy TypeScript
│   │   └── index.ts      # Interfejsy
│   ├── App.tsx           # Główny komponent z routingiem
│   ├── main.tsx          # Punkt wejścia aplikacji
│   └── index.css         # Style globalne + Tailwind
├── index.html            # HTML template
├── package.json          # Zależności projektu
├── tsconfig.json         # Konfiguracja TypeScript
├── vite.config.ts        # Konfiguracja Vite
├── tailwind.config.js    # Konfiguracja Tailwind
├── postcss.config.js     # Konfiguracja PostCSS
└── README.md            # Ten plik
```

## 🎨 Kluczowe pliki

### Komponenty
- **NavBar.tsx** - Responsywna nawigacja z podświetlaniem aktywnej strony

### Strony
- **Home.tsx** - Strona powitalna z kartami modułów
- **Flashcards.tsx** - Interaktywny trener fiszek ze wskaźnikiem postępu
- **Grammar.tsx** - Statyczna treść edukacyjna o gramatyce
- **Games.tsx** - Gra dopasowywania z logiką punktacji
- **Songs.tsx** - Lista piosenek z poziomami trudności
- **Videos.tsx** - Siatka lekcji wideo z placeholderami

### Dane mockowe
Wszystkie dane są przechowywane w plikach w katalogu `src/data/`:
- `flashcards.ts` - 20 fiszek z tłumaczeniami i przykładami
- `games.ts` - 10 par słów do gry dopasowywania
- `songs.ts` - 6 chorwackich piosenek
- `videos.ts` - 8 lekcji wideo

### Typy TypeScript
Plik `src/types/index.ts` zawiera interfejsy:
- `Flashcard` - struktura fiszki
- `Song` - struktura piosenki
- `VideoLesson` - struktura lekcji wideo
- `MatchingPair` - para słów do gry

## 🔮 Przyszłe rozszerzenia (Backend)

Aplikacja jest przygotowana na przyszłą integrację z backendem:

### Możliwe rozszerzenia:
1. **Autentykacja użytkowników**
   - Rejestracja i logowanie
   - Profile użytkowników

2. **Śledzenie postępów**
   - Historia nauki
   - Statystyki i wykresy postępów
   - Osiągnięcia i odznaki

3. **Dynamiczne dane**
   - API do zarządzania fiszkami
   - Baza danych z treściami
   - CRUD dla wszystkich zasobów

4. **Zaawansowane funkcje**
   - Testy i quizy z oceną
   - System powtórek (spaced repetition)
   - Społeczność i rankingi
   - Prawdziwe wideo z YouTube API
   - Interaktywne ćwiczenia

5. **Personalizacja**
   - Własne zestawy fiszek
   - Ulubione piosenki i wideo
   - Notatki użytkownika

### Przygotowanie architektury:
- Typy TypeScript są gotowe do rozszerzenia o pola ID z bazy danych
- Struktura folderów pozwala na łatwe dodanie warstwy API (np. `src/api/` lub `src/services/`)
- Komponenty używają propsów i stanów w sposób umożliwiający łatwą wymianę danych mockowych na dane z API

## 🤝 Współpraca

Projekt jest otwarty na rozszerzenia! Możesz:
- Dodać więcej fiszek i treści edukacyjnych
- Stworzyć nowe gry i ćwiczenia
- Ulepszać istniejące moduły
- Dodać nowe funkcjonalności

## 📝 Licencja

Projekt edukacyjny - wolne użytkowanie.

## 👨‍💻 Autor

Stworzone z ❤️ do nauki języka chorwackiego

---

**Miłej nauki! 🇭🇷 Sretno učenje!**
