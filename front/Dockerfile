FROM node:alpine as builder

WORKDIR /frontend

COPY . .

RUN npm install

RUN npm run build --prod

FROM nginx:alpine

COPY nginxConfig/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /frontend/dist/testove/browser /usr/share/nginx/html
