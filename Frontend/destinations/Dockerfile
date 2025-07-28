FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

VOLUME ["/app/node_modules"]

EXPOSE 3001
CMD ["npm", "run", "dev"]
