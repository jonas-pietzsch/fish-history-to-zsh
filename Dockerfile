FROM node:20.4-alpine3.18

WORKDIR /usr/local/share/fish-history-to-zsh
COPY . .

RUN npm install

ENTRYPOINT ["node", "index.js"]

