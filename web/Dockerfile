FROM node:lts-alpine

WORKDIR /app

RUN apk update && apk upgrade && apk add --no-cache bash git openssh

COPY . ./

RUN npm install && npm run generate

ENV NODE_ENV=production NUXT_HOST=0.0.0.0 NUXT_PORT=3000

CMD ["npm", "run", "start"]
