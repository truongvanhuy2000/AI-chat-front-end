# build environment
FROM node:18-alpine as build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN yarn
COPY . .
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]