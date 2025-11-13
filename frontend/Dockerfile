# Etap 1: Budowanie aplikacji
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

# Skopiuj całą aplikację
COPY . .

# Build Vite
RUN npm run build

# Etap 2: Uruchamianie przez nginx
FROM nginx:alpine

# Skopiuj build
COPY --from=builder /app/dist /usr/share/nginx/html

# Dodaj nginx.conf (ważne!)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]