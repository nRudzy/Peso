# 🚀 Guide de Développement - Peso

Ce guide explique comment configurer et utiliser l'environnement de développement pour le projet Peso.

## 🐍 Environnement Virtuel

### Activation Rapide
```bash
# Option 1: Script automatique
./activate.sh

# Option 2: Manuel
source venv/bin/activate
```

### Vérification
```bash
# Vérifier que l'environnement est activé
make check-env
```

## 🛠️ Installation

### Installation Complète
```bash
# Configuration complète de l'environnement
make setup-dev
```

### Installation Manuelle
```bash
# Dépendances de base
make install

# Dépendances de développement (avec outils de formatage)
make install-dev
```

## 🧪 Tests

### Commandes de Test
```bash
# Tous les tests
make test

# Tests avec vérification de l'environnement virtuel
make test-safe

# Tests de nettoyage spécifiquement
make test-cleanup

# Tests avec couverture de code
make test-coverage

# Tests en mode watch (redémarre automatiquement)
make test-watch
```

### Tests Spécifiques
```bash
# Test d'un fichier spécifique
make test-file FILE=test_users.py

# Test d'une fonction spécifique
make test-function TEST=test_get_current_user_profile

# Test d'intégration
make test-file FILE=test_integration.py
```

## 🚀 Démarrage de l'API

### Mode Développement
```bash
# Avec vérification de l'environnement
make run-dev-safe

# Sans vérification
make run-dev
```

### Mode Production
```bash
make run-prod
```

## 🐳 Docker

### Services
```bash
# Démarrer tous les services
make docker-up

# Arrêter tous les services
make docker-down

# Voir les logs
make docker-logs

# Shell dans le conteneur
make docker-shell
```

## 🗄️ Base de Données

### Migrations
```bash
# Appliquer toutes les migrations
make migrate

# Créer une nouvelle migration
make migrate-create NAME=add_new_feature

# Appliquer les migrations en attente
make migrate-upgrade

# Annuler la dernière migration
make migrate-downgrade

# Voir l'historique
make migrate-history
```

### Nettoyage
```bash
# Nettoyer la BDD de développement (⚠️ attention)
make clean-db

# Nettoyer la BDD de test
make clean-test-db
```

## 🔧 Développement

### Formatage et Linting
```bash
# Formater le code
make format

# Vérifier le formatage sans modifier
make format-check

# Linter
make lint
```

### Nettoyage
```bash
# Nettoyer les fichiers temporaires
make clean
```

## 📖 Documentation

### Accès
```bash
# Démarrer l'API puis accéder à:
# http://localhost:8000/docs     # Swagger UI
# http://localhost:8000/redoc    # ReDoc

make docs  # Affiche les URLs
```

## 🎯 Workflow Typique

### Premier Démarrage
```bash
# 1. Activer l'environnement
./activate.sh

# 2. Configuration complète
make setup-dev

# 3. Démarrer l'API
make run-dev
```

### Développement Quotidien
```bash
# 1. Activer l'environnement
source venv/bin/activate

# 2. Démarrer les services
make docker-up

# 3. Lancer les tests
make test

# 4. Démarrer l'API
make run-dev
```

### Avant un Commit
```bash
# 1. Formater le code
make format

# 2. Vérifier le style
make lint

# 3. Lancer tous les tests
make test

# 4. Vérifier la couverture
make test-coverage
```

## 🚨 Dépannage

### Problèmes Courants

#### Environnement Virtuel Non Activé
```bash
# Erreur: ModuleNotFoundError
# Solution: Activer l'environnement
source venv/bin/activate
```

#### Tests qui Échouent
```bash
# Nettoyer la base de données de test
make clean-test-db

# Relancer les tests
make test
```

#### Services Docker Non Accessibles
```bash
# Redémarrer les services
make docker-down
make docker-up

# Vérifier les logs
make docker-logs
```

#### Migrations en Erreur
```bash
# Voir l'état des migrations
make migrate-history

# Réinitialiser si nécessaire
make clean-db
make migrate
```

## 📋 Checklist de Développement

- [ ] Environnement virtuel activé
- [ ] Dépendances installées
- [ ] Services Docker démarrés
- [ ] Migrations appliquées
- [ ] Tests qui passent
- [ ] Code formaté
- [ ] Linter sans erreurs
- [ ] Documentation à jour

## 🎯 Commandes Rapides

```bash
# Développement rapide
./activate.sh && make setup-dev && make run-dev

# Tests rapides
make test-safe

# Nettoyage complet
make clean && make clean-test-db
```

## 📞 Aide

```bash
# Afficher toutes les commandes disponibles
make help
``` 