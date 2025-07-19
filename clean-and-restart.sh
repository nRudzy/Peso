#!/bin/bash

# Script de nettoyage et redémarrage du projet Peso

echo "🧹 Nettoyage et redémarrage du projet Peso..."

# Arrêt des conteneurs
echo "🛑 Arrêt des conteneurs..."
docker-compose down

# Suppression des volumes (optionnel - décommentez si vous voulez tout effacer)
# echo "🗑️ Suppression des volumes..."
# docker-compose down -v

# Suppression des images (optionnel)
# echo "🗑️ Suppression des images..."
# docker-compose down --rmi all

# Nettoyage du cache Docker
echo "🧹 Nettoyage du cache Docker..."
docker system prune -f

# Reconstruction des conteneurs
echo "🔨 Reconstruction des conteneurs..."
docker-compose build --no-cache

# Redémarrage des services
echo "🚀 Redémarrage des services..."
docker-compose up -d

# Attendre que PostgreSQL soit prêt
echo "⏳ Attente que PostgreSQL soit prêt..."
sleep 15

echo "✅ Nettoyage terminé !"
echo "🎯 Vous pouvez maintenant relancer ./init-project.sh" 