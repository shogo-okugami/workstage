FROM node:16-alpine3.11

WORKDIR /usr/src/app

COPY ./ui/package*.json /usr/src/app

RUN npm install

CMD ["npm","run","dev"]