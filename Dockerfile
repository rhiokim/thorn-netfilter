FROM mhart/alpine-node:7

MAINTAINER Rhio Kim "rhio.kim@gmail.com"

RUN apk --update add --no-cache iptables ip6tables iproute2 ipset sudo

# Copy package first to cache npm-install and speed up build
RUN mkdir -p server
WORKDIR server

# COPY lib lib
COPY routes routes
COPY index.js index.js
COPY package.json package.json

RUN npm install --quiet --no-color --prod
RUN npm cache clean

ENV PORT 8082

EXPOSE $PORT

CMD ["npm", "start"]
