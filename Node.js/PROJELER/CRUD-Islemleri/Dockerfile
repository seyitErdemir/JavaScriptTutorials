FROM node:17.0.1-alpine3.12

WORKDIR /app
 

COPY package*.json .
RUN npm install 
RUN npm install -g nodemon
RUN npm i json-server
RUN json-server --watch db.json 

CMD ["nodemon" , "app"]