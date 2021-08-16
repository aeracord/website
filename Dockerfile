FROM node:14

WORKDIR /aeracord-website

COPY . .

RUN yarn
RUN yarn build

EXPOSE 3004

CMD ["yarn", "start"]