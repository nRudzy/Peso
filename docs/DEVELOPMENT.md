# 🚀 Guide de Développement - Peso SaaS

Ce guide explique comment configurer et utiliser l'environnement de développement pour le projet Peso SaaS (monorepo).

## 🏗️ Architecture du Projet

Peso est un **monorepo** contenant :
- **Backend** : FastAPI (Python) - `backend/`
- **Frontend** : VueJS - `frontend/`
- **Mobile** : React Native/Ionic - `mobile-app/`
- **Infrastructure** : Docker, AWS - `infra/`

## 🐳 Démarrage Rapide avec Docker

### Option 1 : Script Automatique
```bash
# Lancer l'environnement complet
./dev.sh
```

### Option 2 : Manuel
```bash
# Aller dans le dossier infra
cd infra

# Lancer tous les services
docker-compose up -d

# Vérifier l'état
docker-compose ps
```

### Services Disponibles
- **Frontend** : http://localhost:3000
- **Backend API** : http://localhost:8000
- **Documentation API** : http://localhost:8000/docs
- **Nginx** : http://localhost:80
- **Mailpit** : http://localhost:8025

## 🐍 Développement Backend (FastAPI)

### Installation Locale
```bash
cd backend

# Créer un environnement virtuel
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate     # Windows

# Installer les dépendances
pip install -r requirements.txt
```

### Lancement du Backend
```bash
# Mode développement
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Mode production
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

### Tests Backend
```bash
# Tous les tests
pytest

# Tests avec couverture
pytest --cov=app --cov-report=html

# Tests en mode watch
pytest-watch
```

### Migrations Base de Données
```bash
# Créer une migration
alembic revision --autogenerate -m "Description"

# Appliquer les migrations
alembic upgrade head

# Annuler la dernière migration
alembic downgrade -1
```

## 🎨 Développement Frontend (VueJS)

### Installation
```bash
cd frontend

# Installer les dépendances
npm install

# Ou avec yarn
yarn install
```

### Lancement du Frontend
```bash
# Mode développement
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview
```

### Tests Frontend
```bash
# Tests unitaires
npm run test:unit

# Tests E2E
npm run test:e2e

# Linting
npm run lint
```

## 📱 Développement Mobile

### React Native
```bash
cd mobile-app

# Installer les dépendances
npm install

# Lancer l'application
npx expo start

# Build pour Android
npx expo build:android

# Build pour iOS
npx expo build:ios
```

### Ionic
```bash
cd mobile-app

# Installer les dépendances
npm install

# Lancer l'application
ionic serve

# Build pour mobile
ionic capacitor build android
ionic capacitor build ios
```

## 🗄️ Base de Données

### Avec Docker (Recommandé)
```bash
# Démarrer PostgreSQL
docker-compose up -d db

# Appliquer les migrations
docker-compose run --rm migrations
```

### Local
```bash
# Installer PostgreSQL
# Puis configurer dans .env

# Appliquer les migrations
alembic upgrade head
```

## 🧪 Tests

### Tests Backend
```bash
cd backend
pytest
```

### Tests Frontend
```bash
cd frontend
npm run test
```

### Tests E2E
```bash
# Avec Playwright ou Cypress
npm run test:e2e
```

## 🔧 Outils de Développement

### Formatage et Linting
```bash
# Backend (Python)
cd backend
black .
isort .
flake8 .

# Frontend (JavaScript/Vue)
cd frontend
npm run lint
npm run format
```

### Docker Utile
```bash
# Voir les logs
docker-compose logs -f

# Shell dans un conteneur
docker-compose exec backend bash
docker-compose exec frontend sh

# Redémarrer un service
docker-compose restart backend
```

## 🚨 Dépannage

### Problèmes Courants

#### Services Docker Non Accessibles
```bash
# Redémarrer tous les services
docker-compose down
docker-compose up -d

# Vérifier les logs
docker-compose logs
```

#### Migrations en Erreur
```bash
# Réinitialiser la base
docker-compose down -v
docker-compose up -d db
docker-compose run --rm migrations
```

#### Ports Occupés
```bash
# Vérifier les ports utilisés
lsof -i :8000
lsof -i :3000

# Tuer les processus
kill -9 <PID>
```

## 📋 Checklist de Développement

- [ ] Docker installé et fonctionnel
- [ ] Services démarrés (`./dev.sh`)
- [ ] Migrations appliquées
- [ ] Tests qui passent
- [ ] Code formaté et linté
- [ ] Documentation à jour

## 🎯 Workflow Typique

### Premier Démarrage
```bash
# 1. Cloner le projet
git clone <repository>
cd peso

# 2. Lancer l'environnement
./dev.sh

# 3. Vérifier que tout fonctionne
# - Frontend: http://localhost:3000
# - Backend: http://localhost:8000/docs
```

### Développement Quotidien
```bash
# 1. Démarrer l'environnement
./dev.sh

# 2. Développer dans le dossier approprié
# - backend/ pour l'API
# - frontend/ pour l'interface web
# - mobile-app/ pour l'app mobile

# 3. Tester les changements
# - Tests automatiques
# - Tests manuels via les interfaces
```

### Avant un Commit
```bash
# 1. Formater le code
# Backend
cd backend && black . && isort .

# Frontend
cd frontend && npm run format

# 2. Lancer les tests
# Backend
cd backend && pytest

# Frontend
cd frontend && npm run test

# 3. Vérifier le linting
# Backend
cd backend && flake8 .

# Frontend
cd frontend && npm run lint
```

## 📞 Aide

- **Documentation API** : http://localhost:8000/docs
- **Logs Docker** : `docker-compose logs -f`
- **Issues GitHub** : [Lien vers les issues] 