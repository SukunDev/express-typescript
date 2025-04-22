# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json & install deps
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build TypeScript
RUN npx prisma generate
RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "dist/index.js"]
