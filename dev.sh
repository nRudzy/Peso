#!/bin/bash

# Script de développement pour Peso SaaS
# Lance l'environnement complet avec Docker Compose

set -e

# Fonction d'aide
show_help() {
    echo "🚀 Script de développement Peso SaaS"
    echo ""
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --rebuild, -r    Force le rebuild complet de tous les conteneurs"
    echo "  --help, -h       Affiche cette aide"
    echo ""
    echo "Exemples:"
    echo "  $0               # Démarrage normal (rapide)"
    echo "  $0 --rebuild     # Rebuild complet de tous les conteneurs"
    echo ""
}

# Variables
REBUILD_MODE=false

# Parsing des arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --rebuild|-r)
            REBUILD_MODE=true
            shift
            ;;
        --help|-h)
            show_help
            exit 0
            ;;
        *)
            echo "❌ Option inconnue: $1"
            show_help
            exit 1
            ;;
    esac
done

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

if [ "$REBUILD_MODE" = true ]; then
    echo "🔨 Mode REBUILD activé - Nettoyage et rebuild complet..."
    
    # Shutdown des services existants et nettoyage complet
    echo "📦 Arrêt et nettoyage des services existants..."
    docker-compose down -v --remove-orphans

    # Nettoyer les images pour forcer le rebuild
    echo "🧹 Nettoyage des images existantes..."
    docker-compose down --rmi all --volumes --remove-orphans

    # Rebuild et recréer tous les services
    echo "🔨 Rebuild et recréation de tous les services..."
    docker-compose build --no-cache --force-rm

    # Lancer l'environnement avec recréation forcée
    echo "📦 Lancement des services avec recréation forcée..."
    docker-compose up -d --force-recreate --build

    # Attendre que les services soient prêts
    echo "⏳ Attente du démarrage des services..."
    sleep 15
else
    echo "⚡ Mode RAPIDE - Démarrage normal..."
    
    # Shutdown des services existants
    echo "📦 Arrêt des services existants..."
    docker-compose down

    # Lancer l'environnement normal
    echo "📦 Lancement des services..."
    docker-compose up -d

    # Attendre que les services soient prêts
    echo "⏳ Attente du démarrage des services..."
    sleep 10
fi

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
echo "   - Rebuild complet: $0 --rebuild"
echo ""
