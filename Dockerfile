# Stage 1: Build dependencies
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY src/ ./src/

# Stage 2: Runtime image
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3000
USER node  # Run as non-root
CMD ["npm", "start"]
