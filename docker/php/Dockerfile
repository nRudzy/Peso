FROM php:8.2-fpm

# Installation des dépendances système
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    zip \
    unzip \
    libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql mbstring exif pcntl bcmath gd zip

# Installation de PCOV pour la couverture de code
RUN pecl install pcov && docker-php-ext-enable pcov

# Installation de Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configuration PHP pour Symfony
RUN echo "memory_limit=512M" > /usr/local/etc/php/conf.d/memory-limit.ini

# Création de l'utilisateur pour Symfony
RUN useradd -m -s /bin/bash symfony

# Changement du répertoire de travail
WORKDIR /var/www/html

# Changement des permissions
RUN chown -R symfony:symfony /var/www/html

# Passage à l'utilisateur symfony
USER symfony

# Exposition du port 9000 pour PHP-FPM
EXPOSE 9000

# Démarrage de PHP-FPM
CMD ["php-fpm"] 