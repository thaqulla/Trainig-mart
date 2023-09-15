FROM nginx:1.20-alpine

ENV TZ Asia/Tokyo

COPY ./docker/web/default.conf /etc/nginx/conf.d/default.conf

# 作業ディレクトリを設定
WORKDIR /var/www