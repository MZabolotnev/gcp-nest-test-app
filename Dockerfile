FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY data/films.json ./data/films.json


RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]