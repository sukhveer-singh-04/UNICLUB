FROM node:14-alpine

WORKDIR /app

ARG PORT=3000

RUN echo "\n> Copying working directory files...\n"

COPY . .

RUN echo "\n> Installing dependencies...\n"

RUN npm run server-install

EXPOSE $PORT

CMD ["npm", "run", "server"]
