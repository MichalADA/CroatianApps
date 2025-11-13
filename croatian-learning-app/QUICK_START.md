# 🚀 SZYBKI START - Jak uruchomić projekt

## Wybierz metodę uruchomienia:
- **Metoda A: Docker** (najłatwiejsza, nie wymaga Node.js) ⭐ ZALECANA
- **Metoda B: npm** (tradycyjna, wymaga Node.js)

---

## ⭐ METODA A: DOCKER (ZALECANA)

### Krok 1: Zainstaluj Docker
Jeśli nie masz jeszcze Docker:
- **Windows/Mac**: Pobierz [Docker Desktop](https://www.docker.com/products/docker-desktop)
- **Linux**: 
  ```bash
  curl -fsSL https://get.docker.com -o get-docker.sh
  sh get-docker.sh
  ```

### Krok 2: Otwórz terminal/wiersz polecenia
- Windows: Otwórz "Command Prompt" lub "PowerShell"
- Mac/Linux: Otwórz "Terminal"

### Krok 3: Przejdź do katalogu projektu
```bash
cd ścieżka/do/croatian-learning-app
```

### Krok 4: Uruchom aplikację
```bash
docker-compose up -d
```
(To może potrwać 2-3 minuty przy pierwszym uruchomieniu)

### Krok 5: Otwórz przeglądarkę
Otwórz przeglądarkę i wejdź na adres:
```
http://localhost:3000
```

### 🎉 Gotowe!
Aplikacja powinna działać!

### 🛑 Aby zatrzymać aplikację
W terminalu wpisz:
```bash
docker-compose down
```

---

## METODA B: NPM (TRADYCYJNA)

### Krok 1: Zainstaluj Node.js
Jeśli nie masz jeszcze Node.js, pobierz i zainstaluj go z: https://nodejs.org/
(Wybierz wersję LTS - Long Term Support)

## Krok 2: Otwórz terminal/wiersz polecenia
- Windows: Otwórz "Command Prompt" lub "PowerShell"
- Mac/Linux: Otwórz "Terminal"

## Krok 3: Przejdź do katalogu projektu
```bash
cd ścieżka/do/croatian-learning-app
```

## Krok 4: Zainstaluj zależności
```bash
npm install
```
(To może potrwać 1-2 minuty)

## Krok 5: Uruchom aplikację
```bash
npm run dev
```

## Krok 6: Otwórz przeglądarkę
Otwórz przeglądarkę i wejdź na adres:
```
http://localhost:5173
```

## 🎉 Gotowe!
Aplikacja powinna działać. Jeśli widzisz stronę główną z kartami modułów - wszystko działa poprawnie!

## 🛑 Aby zatrzymać aplikację
W terminalu naciśnij: `Ctrl + C`

## ⚠️ Problemy?

### Port już zajęty
Jeśli widzisz błąd "Port 5173 is already in use":
- Zatrzymuj inne aplikacje używające tego portu
- Lub Vite automatycznie użyje innego portu (sprawdź komunikat w terminalu)

### Błąd instalacji
Jeśli `npm install` nie działa:
- Upewnij się że masz zainstalowany Node.js (wpisz `node -v` w terminalu)
- Sprawdź połączenie internetowe
- Spróbuj usunąć folder `node_modules` i uruchom `npm install` ponownie

### Puste białe okno
- Sprawdź czy w terminalu nie ma błędów
- Odśwież stronę w przeglądarce (F5 lub Ctrl+R)
- Wyczyść cache przeglądarki

## 📞 Dalsze kroki
Zajrzyj do pliku README.md po więcej szczegółowych informacji o projekcie!
