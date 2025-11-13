#!/bin/bash

# 🇭🇷 Skrypt uruchamiający aplikację do nauki chorwackiego
# Użycie: ./start.sh [prod|dev]

set -e

# Kolory dla lepszej czytelności
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Banner
echo -e "${BLUE}"
echo "╔═══════════════════════════════════════════╗"
echo "║  🇭🇷  NAUKA JĘZYKA CHORWACKIEGO  🇭🇷      ║"
echo "║        Aplikacja Learning App            ║"
echo "╚═══════════════════════════════════════════╝"
echo -e "${NC}"

# Sprawdź czy Docker jest zainstalowany
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker nie jest zainstalowany!${NC}"
    echo -e "${YELLOW}Zainstaluj Docker z: https://www.docker.com/get-started${NC}"
    exit 1
fi

# Sprawdź czy Docker Compose jest zainstalowany
if ! command -v docker-compose &> /dev/null; then
    echo -e "${RED}❌ Docker Compose nie jest zainstalowany!${NC}"
    echo -e "${YELLOW}Zainstaluj Docker Compose${NC}"
    exit 1
fi

# Sprawdź czy Docker działa
if ! docker info &> /dev/null; then
    echo -e "${RED}❌ Docker nie działa!${NC}"
    echo -e "${YELLOW}Uruchom Docker Desktop lub Docker daemon${NC}"
    exit 1
fi

# Określ tryb (produkcja lub development)
MODE=${1:-prod}

if [ "$MODE" = "dev" ]; then
    echo -e "${BLUE}💻 Uruchamiam w trybie DEVELOPMENT (hot-reload)...${NC}"
    echo ""
    docker-compose -f docker-compose.dev.yml up
    URL="http://localhost:5173"
elif [ "$MODE" = "prod" ]; then
    echo -e "${BLUE}🚀 Uruchamiam w trybie PRODUKCYJNYM...${NC}"
    echo ""
    docker-compose up -d
    URL="http://localhost:3000"
    
    echo ""
    echo -e "${GREEN}✅ Aplikacja uruchomiona!${NC}"
    echo ""
    echo -e "${BLUE}📱 Otwórz w przeglądarce:${NC} ${GREEN}$URL${NC}"
    echo ""
    echo -e "${YELLOW}💡 Aby zatrzymać aplikację, wpisz:${NC} docker-compose down"
    echo -e "${YELLOW}💡 Aby zobaczyć logi, wpisz:${NC} docker-compose logs -f"
    echo ""
    
    # Opcjonalnie otwórz przeglądarkę automatycznie (zakomentuj jeśli nie chcesz)
    # if command -v xdg-open &> /dev/null; then
    #     xdg-open $URL
    # elif command -v open &> /dev/null; then
    #     open $URL
    # fi
else
    echo -e "${RED}❌ Nieprawidłowy tryb!${NC}"
    echo ""
    echo "Użycie:"
    echo "  ./start.sh         - Uruchom w trybie produkcyjnym"
    echo "  ./start.sh prod    - Uruchom w trybie produkcyjnym"
    echo "  ./start.sh dev     - Uruchom w trybie development"
    exit 1
fi
