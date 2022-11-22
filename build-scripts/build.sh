#!/bin/bash

set -e

build_client () {
  cd ./client

  echo "\n> Installing Front end dependencies...\n";
  npm install;

  echo "\n> Building the Front end repository...\n";
  npm run build;

  cd ..
}

move_client_build_to_target () {
  echo "\n> Moving the client build directory to target...\n"
  mv client/build ./build

  echo "\n> Removing client directory...\n"
  rm -rf client
}

move_dockerfile () {
  echo "\n> Moving Dockerfile to target...\n"
  mv ./build-scripts/app.Dockerfile ./Dockerfile
}

deploy_image () {
  echo "\n> Heroku login...\n"
  heroku container:login

  echo "\n> Pusing the image to heroku container...\n"
  heroku container:push web --arg NODE_ENV=production -a "$HEROKU_APP_NAME"

  echo "\n> Releasing the image...\n"
  heroku container:release web -a "$HEROKU_APP_NAME"
}

build_client;
move_client_build_to_target;
move_dockerfile;
deploy_image;
