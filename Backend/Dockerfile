# backend/Dockerfile
FROM node:20

WORKDIR /app

COPY package*.json prisma ./
RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "start:prod", ]
