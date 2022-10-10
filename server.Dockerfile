FROM node:16.14.2
RUN npm i -g --force @nestjs/cli yarn 
WORKDIR /usr/src/app
USER node