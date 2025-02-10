# Use official Node.js LTS image
FROM node:18.17.1 AS base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first (better caching)
COPY package*.json ./

RUN npm config set fetch-timeout 600000
# Install dependencies
RUN npm install


# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
