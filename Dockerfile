FROM node:12

COPY [".", "/usr/src/"]

WORKDIR  /usr/src

RUN npm install

EXPOSE 4000

CMD ["node", "index.js"]