#!/bin/bash

# Script d'initialisation du projet Symfony Peso

echo "🚀 Initialisation du projet Symfony Peso..."

# Construction des conteneurs Docker
echo "📦 Construction des conteneurs Docker..."
docker-compose build

# Démarrage des services
echo "🔄 Démarrage des services..."
docker-compose up -d

# Attendre que PostgreSQL soit prêt
echo "⏳ Attente que PostgreSQL soit prêt..."
sleep 10

# Création du projet Symfony
echo "🎯 Création du projet Symfony..."
docker-compose exec php composer create-project symfony/skeleton:"6.4.*" . --no-interaction

# Installation des dépendances Symfony
echo "📚 Installation des dépendances Symfony..."
docker-compose exec php composer require \
    api-platform/api-pack \
    lexik/jwt-authentication-bundle \
    symfony/mailer \
    symfony/orm-pack \
    symfony/security-bundle \
    symfony/validator \
    symfony/maker-bundle --dev \
    symfony/profiler-pack --dev

# Configuration des permissions
echo "🔐 Configuration des permissions..."
docker-compose exec php chmod -R 777 var/

# Génération des clés JWT
echo "🔑 Génération des clés JWT..."
docker-compose exec php mkdir -p config/jwt
docker-compose exec php openssl genpkey -out config/jwt/private.pem -aes256 -algorithm rsa -pkeyopt rsa_keygen_bits:4096 -pass pass:your-super-secret-passphrase-change-in-production
docker-compose exec php openssl pkey -in config/jwt/private.pem -out config/jwt/public.pem -pubout -passin pass:your-super-secret-passphrase-change-in-production
docker-compose exec php chmod 644 config/jwt/public.pem
docker-compose exec php chmod 600 config/jwt/private.pem

echo "✅ Projet initialisé avec succès!"
echo "🌐 Application accessible sur: http://localhost:8080"
echo "📧 Interface MailHog sur: http://localhost:8025"
echo "🗄️  Base de données PostgreSQL sur: localhost:5432" 