# Etap 1: Budowanie aplikacji
FROM node:18-alpine AS builder

# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj pliki package.json
COPY package*.json ./

# Zainstaluj zależności (użyj npm install zamiast npm ci)
RUN npm install --legacy-peer-deps

# Skopiuj resztę plików aplikacji
COPY . .

# Zbuduj aplikację dla produkcji
RUN npm run build

# Etap 2: Serwowanie aplikacji przez nginx
FROM nginx:alpine

# Skopiuj zbudowaną aplikację z etapu builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Skopiuj custom konfigurację nginx (dla React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Uruchom nginx
CMD ["nginx", "-g", "daemon off;"]
