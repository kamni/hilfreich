# syntax=docker/dockerfile:1

FROM node:26.11-bookworm

ADD . /app
WORKDIR /app

RUN npm install -g corepack
RUN corepack enable
RUN yarn install

CMD ["sleep", "infinity"]
