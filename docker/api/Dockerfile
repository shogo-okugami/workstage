FROM php:7.4.1-fpm
COPY ./docker/api/php.ini /usr/local/etc/php/
 
RUN apt-get update \
    && apt-get install -y zlib1g-dev libzip-dev mariadb-client \
    && docker-php-ext-install zip pdo_mysql
 
#Composer install
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
 
ENV COMPOSER_ALLOW_SUPERUSER 1
 
ENV COMPOSER_HOME /composer
 
ENV PATH $PATH:/composer/vendor/bin
 
WORKDIR /var/www/html
 
RUN composer global require "laravel/installer"

CMD [ "php","artisan","serve","--host","0.0.0.0" ]