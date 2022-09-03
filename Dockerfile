FROM node:lts-alpine AS build

WORKDIR /app/dawei

ENV PATH /app/dawei/node_modules/.bin:$PATH

COPY package.json ./

RUN yarn install 

COPY . ./

RUN yarn run build

FROM denoland/deno:debian
COPY --from=build /app/dawei/dist /app/dawei
CMD [ "deno", "run", "--allow-net", "--allow-read", "--allow-env", "/app/dawei/server/entry.mjs" ]

