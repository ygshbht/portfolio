#!/usr/bin/env bash

root_dir=/var/www/yogeshbhatt.com/ 

cd $root_dir
docker build -t portfolio $root_dir

docker stop portfolio
docker rm portfolio
docker run -d -p 3500:80 --name portfolio portfolio