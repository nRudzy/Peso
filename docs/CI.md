# Pipeline CI/CD - Peso SaaS

Ce document décrit le pipeline CI/CD configuré pour le projet Peso SaaS.

## 🏗️ Architecture du Pipeline

Le pipeline CI est organisé en plusieurs jobs parallèles et séquentiels pour optimiser les performances :

### Jobs Backend (Python/FastAPI)

#### `backend-lint`
- **Objectif** : Vérification de la qualité du code Python
- **Outils** :
  - **Black** : Formatage du code
  - **isort** : Tri des imports
  - **Flake8** : Linting et détection d'erreurs
  - **MyPy** : Vérification des types statiques
- **Dépendances** : Aucune
- **Cache** : Dependencies pip

#### `backend-tests`
- **Objectif** : Tests unitaires et d'intégration
- **Outils** :
  - **pytest** : Framework de tests
  - **pytest-cov** : Couverture de code
  - **PostgreSQL** : Base de données de test
- **Dépendances** : `backend-lint`
- **Cache** : Dependencies pip
- **Services** : PostgreSQL 15

#### `backend-security`
- **Objectif** : Analyse de sécurité
- **Outils** :
  - **Bandit** : Détection de vulnérabilités dans le code
  - **Safety** : Vérification des vulnérabilités des dépendances
- **Dépendances** : Aucune
- **Cache** : Dependencies pip

### Jobs Frontend (Vue.js)

#### `frontend-lint`
- **Objectif** : Vérification de la qualité du code JavaScript/Vue
- **Outils** :
  - **ESLint** : Linting JavaScript/Vue
  - **Prettier** : Formatage du code
- **Dépendances** : Aucune
- **Cache** : Dependencies npm

#### `frontend-tests`
- **Objectif** : Tests unitaires
- **Outils** :
  - **Vitest** : Framework de tests
  - **jsdom** : Environnement DOM pour les tests
- **Dépendances** : Aucune
- **Cache** : Dependencies npm

#### `frontend-e2e`
- **Objectif** : Tests end-to-end
- **Outils** :
  - **Cypress** : Tests E2E
- **Dépendances** : Aucune
- **Cache** : Dependencies npm

#### `frontend-build`
- **Objectif** : Vérification du build de production
- **Outils** :
  - **Vite** : Build de production
- **Dépendances** : Aucune
- **Cache** : Dependencies npm

### Jobs d'Intégration

#### `integration-tests`
- **Objectif** : Tests d'intégration entre backend et frontend
- **Outils** :
  - **FastAPI** : Serveur backend de test
  - **PostgreSQL** : Base de données d'intégration
- **Dépendances** : `backend-tests`, `frontend-tests`
- **Services** : PostgreSQL 15

### Jobs de Qualité

#### `quality-gates`
- **Objectif** : Validation finale de la qualité
- **Dépendances** : Tous les jobs de qualité
- **Actions** : Affichage du résumé de qualité

#### `notify`
- **Objectif** : Notification de succès
- **Dépendances** : `quality-gates`
- **Conditions** : Succès uniquement

## 🔧 Configuration

### Variables d'Environnement

```yaml
env:
  PYTHON_VERSION: "3.11"
  NODE_VERSION: "18"
```

### Services

- **PostgreSQL 15** : Pour les tests backend et d'intégration
- **Health checks** : Vérification de la disponibilité des services

### Cache

- **Backend** : Cache pip basé sur `requirements.txt`
- **Frontend** : Cache npm basé sur `package-lock.json`

## 📊 Métriques et Rapports

### Couverture de Code

- **Backend** : Génération de rapports XML et HTML avec pytest-cov
- **Frontend** : Génération de rapports JSON et HTML avec Vitest
- **Upload** : Envoi automatique vers Codecov avec flags par module

### Sécurité

- **Bandit** : Rapport JSON des vulnérabilités détectées
- **Safety** : Rapport JSON des dépendances vulnérables

## 🚀 Déclenchement

Le pipeline se déclenche automatiquement sur :

- **Push** vers les branches `main` et `develop`
- **Pull Request** vers les branches `main` et `develop`

## 📋 Checklist de Qualité

### Backend
- [ ] Code formaté avec Black
- [ ] Imports triés avec isort
- [ ] Aucune erreur Flake8
- [ ] Types vérifiés avec MyPy
- [ ] Tests unitaires passent
- [ ] Couverture de code > 80%
- [ ] Aucune vulnérabilité détectée

### Frontend
- [ ] Code linté avec ESLint
- [ ] Code formaté avec Prettier
- [ ] Tests unitaires passent
- [ ] Tests E2E passent
- [ ] Build de production réussi
- [ ] Couverture de code > 70%

### Intégration
- [ ] Tests d'intégration passent
- [ ] Communication backend-frontend fonctionnelle

## 🔄 Workflow de Développement

1. **Développement** : Code dans une feature branch
2. **Tests locaux** : Exécution des tests avant commit
3. **Push** : Déclenchement automatique du CI
4. **Validation** : Tous les jobs doivent passer
5. **Merge** : Pull Request vers develop/main
6. **Déploiement** : Pipeline CD séparé (à configurer)

## 🛠️ Commandes Locales

### Backend

```bash
# Installation des dépendances
cd backend
pip install -r requirements.txt

# Linting et formatage
black .
isort .
flake8 .
mypy app/

# Tests
pytest tests/ -v --cov=app

# Sécurité
bandit -r app/
safety check
```

### Frontend

```bash
# Installation des dépendances
cd frontend
npm install

# Linting et formatage
npm run lint
npx prettier --check src/

# Tests
npm run test:unit
npm run test:e2e

# Build
npm run build
```

## 📝 Notes

- Le job `mobile-lint` est désactivé jusqu'à ce que l'application mobile soit complètement configurée
- Les tests d'intégration sont un placeholder pour l'instant
- Le déploiement sera configuré dans un pipeline CD séparé
- Les notifications peuvent être étendues pour Slack, Discord, etc.
