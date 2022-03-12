FROM node:14.15.0

WORKDIR /front-app

COPY package-lock.json /front-app/
COPY package.json /front-app/

COPY . .

RUN npm ci

RUN npm run build

FROM nginx:latest

COPY --from=0 /front-app/dist/telegram /usr/share/nginx/html

EXPOSE 4200
