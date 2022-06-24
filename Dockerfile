FROM node:12
WORKDIR /usr/src/app
COPY ./package.json .
RUN npm install
COPY ./server ./server
EXPOSE 5050
CMD ["npm", "start"]