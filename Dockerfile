FROM node:8.2.1-alpine

WORKDIR /project

RUN npm install -g nodemon@1.11.0

COPY package.json /project/package.json
RUN npm install && npm ls
RUN mv /project/node_modules /node_modules

COPY . /project

CMD ["npm", "start"]
