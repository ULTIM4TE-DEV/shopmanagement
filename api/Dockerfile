FROM node:12.20 AS builder
WORKDIR /app
COPY . ./
RUN npm install

ENV PORT=8081 HOST=0.0.0.0
EXPOSE 8081

CMD ["npm", "run", "dev"]