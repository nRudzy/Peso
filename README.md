# 🏋️ Peso - Application de Suivi de Poids

[![PHP Version](https://img.shields.io/badge/PHP-8.2%2B-blue.svg)](https://php.net)
[![Symfony Version](https://img.shields.io/badge/Symfony-7.3%2B-green.svg)](https://symfony.com)
[![Vue.js Version](https://img.shields.io/badge/Vue.js-3.4%2B-brightgreen.svg)](https://vuejs.org)
[![API Platform](https://img.shields.io/badge/API%20Platform-4.1%2B-orange.svg)](https://api-platform.com)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)

**Peso** est une application moderne de suivi de poids et de santé, construite avec une architecture hybride **Vue 3 + Symfony** utilisant l'approche "Islands Architecture".

## 🎯 Fonctionnalités

### 🔐 Authentification & Gestion des Utilisateurs
- **Inscription/Connexion** avec JWT
- **Profils utilisateurs** complets (âge, genre, taille, poids initial/objectif)
- **Authentification hybride** : JWT pour l'API + Session pour les routes web
- **Gestion des rôles** (ROLE_USER, ROLE_ADMIN)

### 📊 Suivi de Poids
- **Enregistrement des poids** avec dates et commentaires
- **Calcul automatique du BMI** (Indice de Masse Corporelle)
- **Graphiques de progression** avec Chart.js
- **Statistiques détaillées** (perte totale, reste à perdre, objectifs)

### 🎨 Interface Utilisateur
- **Design moderne** avec TailwindCSS
- **Composants Vue 3** réactifs
- **Interface responsive** (mobile-first)
- **Graphiques interactifs** pour visualiser la progression

### 🔧 Architecture Technique
- **API REST** avec API Platform
- **Validation des données** avec Symfony Validator
- **Sécurité renforcée** avec Lexik JWT Bundle
- **Base de données** PostgreSQL avec Doctrine ORM

## 🏗️ Architecture

### Vue 3 + Symfony (Islands Architecture)

L'application utilise une approche hybride innovante :

```
┌─────────────────────────────────────────────────────────────┐
│                    Symfony (Backend)                        │
├─────────────────────────────────────────────────────────────┤
│  • API Platform (REST API)                                  │
│  • Doctrine ORM (Base de données)                           │
│  • JWT Authentication                                       │
│  • Twig Templates (Pages web)                               │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Vue 3 (Frontend)                         │
├─────────────────────────────────────────────────────────────┤
│  • Islands Architecture                                     │
│  • Composants montés conditionnellement                     │
│  • Pinia (State Management)                                 │
│  • TailwindCSS (Styling)                                    │
└─────────────────────────────────────────────────────────────┘
```

### Structure des Composants Vue

```
assets/
├── components/
│   ├── auth/           # Authentification
│   │   ├── LoginForm.vue
│   │   └── RegisterForm.vue
│   ├── dashboard/      # Tableau de bord
│   │   └── WeightProgressChart.vue
│   ├── journal/        # Journal de poids
│   │   └── JournalEntryForm.vue
│   ├── shared/         # Composants réutilisables
│   │   ├── BaseButton.vue
│   │   ├── LoadingSpinner.vue
│   │   └── Alert.vue
│   └── social/         # Fonctionnalités sociales
│       ├── FriendList.vue
│       ├── Feed.vue
│       └── ActivityCard.vue
├── store/              # Gestion d'état Pinia
│   └── modules/
│       ├── auth.js
│       └── weight.js
└── utils/              # Utilitaires
    ├── api.js          # Service API Axios
    └── helpers.js      # Fonctions utilitaires
```

### Architecture Backend (DDD)

```
src/
├── Controller/         # Contrôleurs (minimal)
│   ├── Api/           # API REST
│   └── WebController.php
├── DataProvider/      # Logique métier
│   ├── UserDataProvider.php
│   └── WeightEntryDataProvider.php
├── Transformer/       # Transformation des données
│   ├── UserTransformer.php
│   └── WeightEntryTransformer.php
├── Service/           # Services métier
│   ├── UserService.php
│   ├── BmiCalculator.php
│   └── LocaleService.php
├── Response/          # Wrappers de réponse
│   └── ApiResponseWrapper.php
├── Factory/           # Factories
│   └── PaginationMetadataFactory.php
└── Entity/            # Entités Doctrine
    ├── User.php
    └── WeightEntry.php
```

## 🚀 Technologies Utilisées

### Backend
- **Symfony 7.3** - Framework PHP moderne
- **API Platform 4.1** - Génération automatique d'API REST
- **Doctrine ORM 3.5** - Mapping objet-relationnel
- **PostgreSQL 15** - Base de données robuste
- **Lexik JWT Bundle** - Authentification JWT
- **Symfony Security** - Gestion de la sécurité

### Frontend
- **Vue 3.4** - Framework JavaScript progressif
- **Pinia 2.1** - Gestion d'état moderne
- **TailwindCSS 3.4** - Framework CSS utilitaire
- **Chart.js 4.4** - Graphiques interactifs
- **Axios 1.6** - Client HTTP
- **Webpack Encore** - Build system

### Outils de Développement
- **Docker & Docker Compose** - Containerisation
- **PHPStan** - Analyse statique PHP
- **PHPUnit** - Tests unitaires
- **PHP CS Fixer** - Formatage de code
- **Psalm** - Analyse de types
- **Deptrac** - Analyse d'architecture

## 📋 Fonctionnalités Détaillées

### 🔐 Système d'Authentification
- **JWT Tokens** pour l'API REST
- **Sessions Symfony** pour les routes web
- **Conversion automatique** JWT → Session via EventListener
- **Sécurité renforcée** avec validation des tokens

### 📊 Gestion des Données de Poids
- **Enregistrement** : poids, date, commentaires
- **Calculs automatiques** : BMI, progression, statistiques
- **Validation** : poids entre 20-500kg, dates cohérentes
- **Autorisations** : chaque utilisateur ne voit que ses données

### 🎨 Interface Utilisateur
- **Design System** cohérent avec TailwindCSS
- **Composants réutilisables** (BaseButton, Alert, LoadingSpinner)
- **Graphiques interactifs** pour visualiser la progression
- **Responsive Design** optimisé mobile/desktop

### 🔧 API REST
- **Endpoints standardisés** avec API Platform
- **Réponses formatées** : `{ data: ..., metadata: ... }`
- **Pagination automatique** avec métadonnées
- **Validation des données** avec contraintes Symfony
- **Documentation automatique** avec OpenAPI

## 🏛️ Principes d'Architecture

### Domain-Driven Design (DDD)
- **Séparation des responsabilités** claire
- **Logique métier** dans les services et data providers
- **Contrôleurs minimaux** déléguant aux services
- **Transformers** pour la présentation des données

### Clean Architecture
- **Couches bien définies** : Controllers → Services → Repositories
- **Injection de dépendances** via constructeur
- **Tests unitaires** pour chaque couche
- **Gestion d'erreurs** centralisée

### Islands Architecture (Frontend)
- **Composants Vue montés conditionnellement** dans les pages Twig
- **Communication API** standardisée
- **État global** géré avec Pinia
- **Progressive Enhancement** : fonctionne sans JavaScript

## 🔒 Sécurité

- **Authentification JWT** avec Lexik Bundle
- **Validation des données** avec Symfony Validator
- **Autorisations granulaires** par utilisateur
- **Protection CSRF** sur les formulaires web
- **Validation des entrées** côté serveur et client

## 📈 Performance

- **Lazy Loading** des composants Vue
- **Optimisation des requêtes** Doctrine
- **Cache Symfony** pour les métadonnées
- **Compression des assets** avec Webpack Encore
- **Base de données optimisée** avec index appropriés

## 🧪 Qualité du Code

- **Tests unitaires** avec PHPUnit
- **Analyse statique** avec PHPStan et Psalm
- **Formatage automatique** avec PHP CS Fixer
- **Analyse d'architecture** avec Deptrac
- **Tests de mutation** avec Infection

---

**Peso** représente une approche moderne du développement web, combinant la robustesse de Symfony avec la réactivité de Vue.js dans une architecture hybride innovante. 🚀 