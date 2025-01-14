FROM node:23-alpine AS build
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Đặt entrypoint
ENTRYPOINT ["/entrypoint.sh"]

RUN npm run build

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html
