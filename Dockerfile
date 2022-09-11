from node:17

workdir /API-NETFLIX

COPY ["package.json", "package-lock.json*", "./"]

RUN npm i

COPY . .


EXPOSE 4000