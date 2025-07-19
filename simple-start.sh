#!/bin/bash

echo "🚀 Démarrage simple du projet Peso..."

# Arrêt des conteneurs
docker-compose down

# Nettoyage complet
sudo rm -rf vendor/ var/ config/ src/ public/ bin/ composer.* symfony.lock

# Démarrage des services
docker-compose up -d
sleep 10

# Création d'un projet Symfony minimal dans un sous-dossier
docker-compose exec php mkdir -p temp
docker-compose exec php composer create-project symfony/skeleton temp --no-interaction

# Déplacer les fichiers vers la racine
docker-compose exec php cp -r temp/* temp/.* . || true
docker-compose exec php rm -rf temp/

# Installer API Platform
docker-compose exec php composer require api-platform/api-pack

# Créer un contrôleur simple pour tester
docker-compose exec php mkdir -p src/Controller

# Copier notre .env
docker-compose exec php cp env.example .env

# Permissions
docker-compose exec php chmod -R 777 var/ || true

echo "✅ Projet simple créé !"
echo "🌐 Testez : curl http://localhost:8080/" 