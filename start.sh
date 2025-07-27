#!/bin/bash

# Peso API - Script de démarrage
echo "🚀 Démarrage de Peso API..."

# Vérifier si Docker est installé
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé. Veuillez installer Docker d'abord."
    exit 1
fi

# Vérifier si Docker Compose est installé
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose n'est pas installé. Veuillez installer Docker Compose d'abord."
    exit 1
fi

# Vérifier si le fichier .env existe
if [ ! -f .env ]; then
    echo "📝 Création du fichier .env..."
    cp env.example .env
    echo "⚠️  Veuillez configurer le fichier .env avec vos paramètres avant de relancer le script."
    exit 1
fi

# Arrêter les conteneurs existants
echo "🛑 Arrêt des conteneurs existants..."
docker-compose down

# Construire et démarrer les conteneurs
echo "🔨 Construction et démarrage des conteneurs..."
docker-compose up --build -d

# Attendre que la base de données soit prête
echo "⏳ Attente du démarrage de la base de données..."
sleep 10

# Vérifier que les conteneurs sont en cours d'exécution
if docker-compose ps | grep -q "Up"; then
    echo "✅ Application démarrée avec succès!"
    echo ""
    echo "📊 Accès à l'application:"
    echo "   🌐 API: http://localhost:8000"
    echo "   📚 Documentation Swagger: http://localhost:8000/docs"
    echo "   📖 Documentation ReDoc: http://localhost:8000/redoc"
    echo "   💚 Health Check: http://localhost:8000/health"
    echo ""
    echo "🔧 Commandes utiles:"
    echo "   📋 Voir les logs: docker-compose logs -f web"
    echo "   🛑 Arrêter: docker-compose down"
    echo "   🔄 Redémarrer: docker-compose restart"
    echo "   🧪 Tests: docker-compose exec web pytest"
else
    echo "❌ Erreur lors du démarrage. Vérifiez les logs:"
    docker-compose logs
    exit 1
fi 