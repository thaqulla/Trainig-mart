FROM php:8.2-fpm

# php.iniファイルをコピー
COPY ./docker/app/php.ini /usr/local/etc/php/php.ini

# 必要なパッケージをインストール
RUN apt-get update && \
  apt-get install -y \
  zlib1g-dev \
  mariadb-client \   
  vim \
  libzip-dev \
  gnupg \
  git \
  unzip \
  libicu-dev \
  libonig-dev && \
  docker-php-ext-install zip pdo_mysql intl bcmath

# Composerをインストール
# RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
#   && php composer-setup.php \
#   && php -r "unlink('composer-setup.php');" \
#   && mv composer.phar /usr/local/bin/composer
COPY --from=composer:2.0 /usr/bin/composer /usr/bin/composer
RUN composer self-update --2

# # Composerの設定
# ENV COMPOSER_ALLOW_SUPERUSER 1
# ENV COMPOSER_HOME /composer
# ENV PATH $PATH:/composer/vendor/bin

# 作業ディレクトリを設定
WORKDIR /var/www

# Laravel Installerをグローバルでインストール
RUN composer global require "laravel/installer"

# Node.jsのインストール
COPY --from=node:18.7 /usr/local/bin /usr/local/bin
COPY --from=node:18.7 /usr/local/lib /usr/local/lib
# RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
#   && apt-get install -y nodejs

ENV TZ Asia/Tokyo

# # Localize error messages to Japanese in Laravel 8.x. Please execute it in the 'src' directory.
# php -r "copy('https://readouble.com/laravel/8.x/ja/install-ja-lang-files.php', 'install-ja-lang.php');" \
# php -f install-ja-lang.php \
# php -r "unlink('install-ja-lang.php');"

# composer require laravel/ui
# php artisan ui bootstrap --auth
# npm install -g npm@10.1.0
# npm install chart.js
# resouces/js/app.jsに「import './chartjs';」を記入