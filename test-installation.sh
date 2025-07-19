#!/bin/bash

# Script de test de l'installation du projet Peso

echo "🧪 Test de l'installation du projet Peso..."

# Vérifier que Docker est installé
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé"
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose n'est pas installé"
    exit 1
fi

echo "✅ Docker et Docker Compose sont installés"

# Vérifier que les conteneurs sont en cours d'exécution
echo "🔍 Vérification des conteneurs..."
if ! docker-compose ps | grep -q "Up"; then
    echo "⚠️  Les conteneurs ne sont pas démarrés. Démarrage..."
    docker-compose up -d
    sleep 10
fi

echo "✅ Conteneurs démarrés"

# Tester la connexion à la base de données
echo "🗄️ Test de la connexion à PostgreSQL..."
if docker-compose exec -T postgres pg_isready -U peso_user -d peso_db > /dev/null 2>&1; then
    echo "✅ Connexion à PostgreSQL réussie"
else
    echo "❌ Échec de la connexion à PostgreSQL"
    exit 1
fi

# Tester l'application Symfony
echo "🌐 Test de l'application Symfony..."
if curl -s http://localhost:8080 > /dev/null; then
    echo "✅ Application Symfony accessible"
else
    echo "❌ Application Symfony non accessible"
    exit 1
fi

# Tester l'interface MailHog
echo "📧 Test de l'interface MailHog..."
if curl -s http://localhost:8025 > /dev/null; then
    echo "✅ Interface MailHog accessible"
else
    echo "❌ Interface MailHog non accessible"
    exit 1
fi

# Vérifier les migrations
echo "📦 Vérification des migrations..."
if docker-compose exec php php bin/console doctrine:migrations:status | grep -q "No migrations to execute"; then
    echo "✅ Migrations à jour"
else
    echo "⚠️  Migrations en attente d'exécution"
    docker-compose exec php php bin/console doctrine:migrations:migrate --no-interaction
fi

# Test de l'API
echo "🔌 Test de l'API..."
API_RESPONSE=$(curl -s http://localhost:8080/api)
if echo "$API_RESPONSE" | grep -q "API"; then
    echo "✅ API accessible"
else
    echo "❌ API non accessible"
    exit 1
fi

echo ""
echo "🎉 Installation testée avec succès !"
echo ""
echo "📋 Résumé des services :"
echo "   🌐 Application Symfony : http://localhost:8080"
echo "   📧 Interface MailHog : http://localhost:8025"
echo "   🗄️  Base de données PostgreSQL : localhost:5432"
echo "   📚 Documentation API : http://localhost:8080/api/docs"
echo ""
echo "🚀 Votre projet Peso est prêt à être utilisé !" 