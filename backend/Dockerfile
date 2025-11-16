# Etap 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Build TypeScript
RUN npm run build

# Etap 2: Runtime
FROM node:18-alpine

WORKDIR /app

# Zainstaluj tylko produkcyjne zależności
COPY package*.json ./
RUN npm install --only=production --legacy-peer-deps

# Skopiuj zbudowany kod
COPY --from=builder /app/dist ./dist

# Prisma - potrzebny w runtime!
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Prisma schema
COPY prisma ./prisma

EXPOSE 3001

CMD ["node", "dist/server.js"]
