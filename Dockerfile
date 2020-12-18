FROM node:lts-alpine3.12

RUN apk add --no-cache bash git

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@7.4.1

USER node

WORKDIR /home/node/app