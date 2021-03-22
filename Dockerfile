# Base image
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
ADD . .

# Instal deps
RUN yarn

