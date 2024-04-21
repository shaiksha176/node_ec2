# Use an official Node.js runtime as the base image
FROM node:20-alpine3.18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 3001

# Define the command to run your app
CMD ["node", "index.js"]
# CMD ["npm","run","dev"]
