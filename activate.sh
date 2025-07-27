#!/bin/bash

# Script pour activer l'environnement virtuel et afficher les commandes utiles

echo "🐍 Activation de l'environnement virtuel Peso..."

# Vérifier si l'environnement virtuel existe
if [ ! -d "venv" ]; then
    echo "❌ Environnement virtuel non trouvé!"
    echo "Création de l'environnement virtuel..."
    python3 -m venv venv
fi

# Activer l'environnement virtuel
source venv/bin/activate

echo "✅ Environnement virtuel activé!"
echo ""
echo "🚀 Commandes utiles:"
echo "  make help          # Afficher toutes les commandes"
echo "  make install       # Installer les dépendances"
echo "  make test          # Lancer les tests"
echo "  make run-dev       # Démarrer l'API en développement"
echo "  make docker-up     # Démarrer les services Docker"
echo "  make setup-dev     # Configuration complète"
echo ""
echo "📖 Documentation:"
echo "  http://localhost:8000/docs     # Swagger UI"
echo "  http://localhost:8000/redoc    # ReDoc"
echo ""
echo "🧪 Tests:"
echo "  make test-cleanup  # Tests de nettoyage"
echo "  make test-coverage # Tests avec couverture"
echo "  make test-file FILE=test_users.py  # Test d'un fichier"
echo ""
echo "🔧 Développement:"
echo "  make format        # Formater le code"
echo "  make lint          # Vérifier le style"
echo "  make clean         # Nettoyer les fichiers temporaires"
echo ""
echo "🐳 Docker:"
echo "  make docker-up     # Démarrer les services"
echo "  make docker-down   # Arrêter les services"
echo "  make docker-logs   # Voir les logs"
echo ""
echo "🗄️  Base de données:"
echo "  make migrate       # Appliquer les migrations"
echo "  make clean-db      # Nettoyer la BDD (⚠️  attention)"
echo ""
echo "💡 Pour désactiver l'environnement: deactivate"
echo "" 