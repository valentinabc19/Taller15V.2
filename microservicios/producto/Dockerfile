FROM node:20

WORKDIR /producto
COPY package.json .
RUN npm install

EXPOSE 3002

COPY . .
CMD node src/index.js