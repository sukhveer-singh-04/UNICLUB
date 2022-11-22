FROM debian

RUN echo "\n> Setting env variables...\n"

ENV HEROKU_API_KEY=$HEROKU_API_KEY
ENV HEROKU_APP_NAME=$HEROKU_APP_NAME

RUN echo "\n> Installing git...\n"

RUN apt update
RUN apt install -y git

RUN echo "\n> Installing NodeJS...\n"

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt update
RUN apt install nodejs -y

RUN echo "\n> Installing npm & yarn...\n"

RUN apt install npm -y
RUN npm -g install yarn

RUN echo "\n> Installing docker...\n"

RUN apt install docker.io -y

RUN echo "\n> Installing heroku...\n"

RUN npm install heroku -g

WORKDIR /working_directory

RUN echo "\n> Copying working diretory files...\n"

COPY . .

CMD bash build-scripts/build.sh
