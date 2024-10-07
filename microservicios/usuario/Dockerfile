FROM node:20

WORKDIR /usuario
COPY package.json .
RUN npm install

EXPOSE 3001

COPY . .
CMD node src/index.js