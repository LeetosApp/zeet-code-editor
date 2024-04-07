# Use Node.js image as base
FROM node:14

# Install g++ compiler
RUN apt-get update && apt-get install -y g++

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port 3000 (or any other port your Node.js application listens on)
EXPOSE 3000

# Command to run the Node.js application
CMD ["node", "app.js"]
