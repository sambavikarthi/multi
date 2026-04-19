# Use an official Node.js runtime as a parent image
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
