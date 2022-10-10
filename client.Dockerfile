FROM node:16.14.2
RUN npm i -g yarn next --force
WORKDIR /usr/src/app
COPY . .
RUN yarn
USER node