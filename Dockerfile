FROM node:16-buster
RUN mkdir /app
COPY package.json /app/
WORKDIR /app
COPY . ./

ENV NEXT_PUBLIC_APP_URL=https://nextjs-load-test.xpri.dev

RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run","start"]