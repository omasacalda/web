# Base image
FROM node:10
CMD ["npm", "run", "start:dev"]

# Create app directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/package.json
RUN yarn

# Bundle app source
COPY . /usr/src/app

# Build app
RUN npm run build
