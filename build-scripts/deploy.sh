#!/bin/bash

set -e

TAG=the-matrix-deploy

echo "\n> Building the deployment docker image...\n";

docker build -t "$TAG" -f build-scripts/deploy.Dockerfile .

echo "\n> Running the deployment docker image...\n";

docker run \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -e GITHUB_API_TOKEN="$GITHUB_API_TOKEN" \
  -e HEROKU_API_KEY="$HEROKU_API_KEY" \
  -e HEROKU_APP_NAME="$HEROKU_APP_NAME" \
  -e FRONT_END_REPO="$FRONT_END_REPO" \
  -t "$TAG"
