# syntax=docker/dockerfile:1

FROM node:26.11-bookworm

ADD src/frontend /app
WORKDIR /app

RUN npm install -g corepack
RUN npm install yarn
RUN yarn

CMD ["sleep", "infinity"]
