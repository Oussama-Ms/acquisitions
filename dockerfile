# Base image with Node.js
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

# --- Development Stage (Backend Only) ---
# Used for local development with docker compose
FROM base AS development
# Install all dependencies (including devDependencies)
RUN npm ci
# Copy source code
COPY . .
# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
RUN chown -R nodejs:nodejs /app
USER nodejs
EXPOSE 3000
CMD ["npm", "run", "dev"]

# --- Frontend Builder Stage (Production Only) ---
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
# Copy frontend package files
COPY frontend/package*.json ./
# Install frontend dependencies
RUN npm ci
# Copy frontend source
COPY frontend/ ./
# Build frontend
RUN npm run build

# --- Production Stage (Unified Build) ---
FROM base AS production
# Install only production dependencies
RUN npm ci --only=production
# Copy backend source
COPY . .
# Copy built frontend from builder stage
COPY --from=frontend-builder /app/frontend/dist ./public
# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
RUN chown -R nodejs:nodejs /app
USER nodejs
EXPOSE 3000
CMD ["npm", "start"]