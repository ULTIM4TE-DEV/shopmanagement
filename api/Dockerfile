FROM node:12.20 AS builder
WORKDIR /app
COPY . ./
RUN npm install
# RUN npm run typeorm migration:run

ENV PORT=8081 HOST=0.0.0.0
EXPOSE 8081

CMD ["npm", "run", "dev"]