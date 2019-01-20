# Base image
FROM node:10.3.0-slim
CMD ["npm", "run", "start:dev"]

# Create app directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Build app
RUN npm run build
