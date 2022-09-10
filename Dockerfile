from node:17

workdir /API-NETFLIX

COPY ["package.json", "package-lock.json*", "./"]

RUN npm i

COPY . .

run npm start

EXPOSE 3000