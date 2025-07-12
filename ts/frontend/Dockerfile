FROM oven/bun:latest

WORKDIR /usr/src/app
COPY package*.json ./
COPY bun.lock ./
RUN bun install

COPY . .
EXPOSE 3000
CMD [ "bun", "start" ]
