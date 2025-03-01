# build environment
FROM node:12.14.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.17.6-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm -v /etc/nginx/nginx.conf
COPY --from=build /app/config/nginx/nginx.conf /etc/nginx/
COPY --from=build /app/config/nginx/gzip.conf /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]