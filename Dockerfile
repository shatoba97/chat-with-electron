FROM node:14.15.0

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY . .

RUN npm ci

EXPOSE 4200
CMD npm run start:host
