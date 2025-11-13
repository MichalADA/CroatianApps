# Makefile dla łatwego zarządzania aplikacją Docker
# Użycie: make [komenda]

.PHONY: help build up down restart logs clean dev dev-down prod

# Domyślna komenda - pokazuje pomoc
help:
	@echo "🇭🇷 Aplikacja do Nauki Chorwackiego - Komendy Docker"
	@echo ""
	@echo "Dostępne komendy:"
	@echo "  make prod          - Uruchom aplikację (produkcja)"
	@echo "  make dev           - Uruchom aplikację (development z hot-reload)"
	@echo "  make build         - Zbuduj obraz Docker"
	@echo "  make down          - Zatrzymaj aplikację"
	@echo "  make restart       - Restart aplikacji"
	@echo "  make logs          - Zobacz logi"
	@echo "  make clean         - Wyczyść wszystko (kontenery, obrazy)"
	@echo "  make dev-down      - Zatrzymaj tryb development"
	@echo ""

# Uruchom produkcyjną wersję
prod:
	@echo "🚀 Uruchamiam aplikację (produkcja)..."
	docker-compose up -d
	@echo "✅ Aplikacja działa na http://localhost:3000"

# Uruchom wersję deweloperską
dev:
	@echo "💻 Uruchamiam aplikację (development)..."
	docker-compose -f docker-compose.dev.yml up
	@echo "✅ Aplikacja działa na http://localhost:5173"

# Zbuduj obraz
build:
	@echo "🔨 Buduję obraz Docker..."
	docker-compose build --no-cache

# Zatrzymaj aplikację
down:
	@echo "🛑 Zatrzymuję aplikację..."
	docker-compose down

# Zatrzymaj tryb development
dev-down:
	@echo "🛑 Zatrzymuję aplikację (development)..."
	docker-compose -f docker-compose.dev.yml down

# Restart aplikacji
restart:
	@echo "🔄 Restartuję aplikację..."
	docker-compose restart
	@echo "✅ Restart zakończony"

# Zobacz logi
logs:
	@echo "📋 Logi aplikacji:"
	docker-compose logs -f

# Wyczyść wszystko
clean:
	@echo "🧹 Czyszczenie..."
	docker-compose down -v
	docker rmi croatian-learning-app 2>/dev/null || true
	@echo "✅ Wyczyszczono"

# Przebuduj i uruchom
rebuild: clean build prod
	@echo "✅ Przebudowano i uruchomiono"

# Status kontenerów
status:
	@echo "📊 Status kontenerów:"
	docker-compose ps

# Wejdź do kontenera (bash)
shell:
	@echo "🐚 Wchodzę do kontenera..."
	docker exec -it croatian-learning-app sh
