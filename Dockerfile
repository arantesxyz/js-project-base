FROM node:12-alpine

WORKDIR /home/container

COPY package*.json ./
COPY yarn.lock ./

RUN yarn --production

ADD src ./

CMD [ "node", "index.js" ]