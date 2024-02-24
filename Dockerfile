FROM node:16-buster
RUN mkdir /app
COPY package.json /app/
WORKDIR /app
COPY . ./

ENV NEXT_PUBLIC_APP_URL="https://nextjs-load-test-a6ottir2fa-uc.a.run.app"

RUN npm install
RUN npm run build

CMD ["npm", "run","start"]