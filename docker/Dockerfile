FROM node:alpine

ENV NODE_VERSION 15.5.1
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]