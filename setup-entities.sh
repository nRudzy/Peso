#!/bin/bash

# Script de configuration des entités et de la structure Symfony

echo "🏗️ Configuration des entités et de la structure Symfony..."

# Création des dossiers de structure
echo "📁 Création de la structure des dossiers..."
docker-compose exec php mkdir -p src/Entity src/Controller/Api src/Service src/Repository

# Configuration de la sécurité JWT
echo "🔐 Configuration de la sécurité JWT..."
docker-compose exec php php bin/console lexik:jwt:generate-keypair --overwrite

# Configuration de la base de données
echo "🗄️ Configuration de la base de données..."
docker-compose exec php php bin/console doctrine:database:create --if-not-exists
docker-compose exec php php bin/console doctrine:schema:update --force

# Création des entités User et WeightEntry
echo "👤 Création de l'entité User..."
docker-compose exec php php bin/console make:entity User --no-interaction

echo "⚖️ Création de l'entité WeightEntry..."
docker-compose exec php php bin/console make:entity WeightEntry --no-interaction

# Création des contrôleurs API
echo "🎮 Création des contrôleurs API..."
docker-compose exec php php bin/console make:controller Api/UserController --no-interaction
docker-compose exec php php bin/console make:controller Api/WeightEntryController --no-interaction
docker-compose exec php php bin/console make:controller Api/AuthController --no-interaction

# Création des services
echo "🔧 Création des services..."
docker-compose exec php php bin/console make:service BmiCalculator
docker-compose exec php php bin/console make:service EmailService
docker-compose exec php php bin/console make:service UserService

# Création des migrations
echo "📦 Création des migrations..."
docker-compose exec php php bin/console make:migration

# Exécution des migrations
echo "🚀 Exécution des migrations..."
docker-compose exec php php bin/console doctrine:migrations:migrate --no-interaction

# Configuration des permissions
echo "🔐 Configuration des permissions..."
docker-compose exec php chmod -R 777 var/

echo "✅ Configuration terminée!"
echo "🎯 Vous pouvez maintenant commencer à développer votre API!" 