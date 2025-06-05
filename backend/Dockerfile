FROM node:18

WORKDIR /app

# Copy package files separately to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Start the app
CMD ["npm", "start"]

