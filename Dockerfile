FROM node:12

WORKDIR /aeracord-website

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3004

CMD ["node", "index.js"]