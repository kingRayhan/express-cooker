FROM node:10

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

COPY . .

RUN yarn link-module

RUN npm install pm2 -g

EXPOSE 3000 5432