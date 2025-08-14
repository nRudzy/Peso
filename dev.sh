#!/bin/bash

# Script de développement pour Peso SaaS
# Lance l'environnement complet avec Docker Compose

set -e

echo "🚀 Démarrage de l'environnement de développement Peso..."

# Vérifier que Docker est installé
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé. Veuillez installer Docker d'abord."
    exit 1
fi

# Vérifier que Docker Compose est installé
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose n'est pas installé. Veuillez installer Docker Compose d'abord."
    exit 1
fi

# Aller dans le dossier infra
cd infra

# Lancer l'environnement
echo "📦 Lancement des services..."
docker-compose up -d

# Attendre que les services soient prêts
echo "⏳ Attente du démarrage des services..."
sleep 10

# Vérifier l'état des services
echo "🔍 Vérification de l'état des services..."
docker-compose ps

echo ""
echo "✅ Environnement de développement prêt !"
echo ""
echo "🌐 Services disponibles :"
echo "   - Frontend: http://localhost:3000"
echo "   - Backend API: http://localhost:8000"
echo "   - Documentation API: http://localhost:8000/docs"
echo "   - Nginx (reverse proxy): http://localhost:80"
echo "   - Mailpit (emails): http://localhost:8025"
echo ""
echo "📋 Commandes utiles :"
echo "   - Voir les logs: docker-compose logs -f"
echo "   - Arrêter: docker-compose down"
echo "   - Redémarrer: docker-compose restart"
echo ""
