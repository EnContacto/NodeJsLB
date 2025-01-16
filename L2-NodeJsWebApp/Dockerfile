FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


EXPOSE 5454

CMD ["node", "app.js"]
