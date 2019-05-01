# FROM node:10-alpine
FROM node:10

WORKDIR /app

COPY ./ng-app .

RUN npm install
RUN npm rebuild node-sass
RUN npm run build:ssr

ENV HOST 0.0.0.0

CMD ["npm", "run", "serve:ssr"]

EXPOSE 4000