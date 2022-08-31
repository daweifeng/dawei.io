FROM node:lts-alpine AS build

WORKDIR /app/dawei

ENV PATH /app/dawei/node_modules/.bin:$PATH

COPY package.json ./

RUN yarn install 

COPY . ./

RUN yarn run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/dawei/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
