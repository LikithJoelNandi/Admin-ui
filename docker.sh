#!/usr/bin/env bash
port=4300
docker stop admin-ui
docker rm admin-ui
docker rmi admin-ui
docker image build -t Admin-ui ~/Admin-ui/.
docker run -d -p 4300:4200 --name Admin-ui Admin-ui
