# Peso - API de Suivi de Perte de Poids

Une API REST moderne et performante pour le suivi de perte de poids, développée avec FastAPI et PostgreSQL.

## 🚀 Fonctionnalités

- **Authentification JWT** avec tokens d'accès et de rafraîchissement
- **Gestion des utilisateurs** avec profils personnalisables
- **Suivi des entrées de poids** avec historique et statistiques
- **Vérification d'email** à l'inscription
- **Réinitialisation de mot de passe** par email
- **API documentée** avec Swagger/OpenAPI
- **Architecture modulaire** avec séparation des responsabilités
- **100% dockerisé** pour un déploiement facile

## 🛠️ Technologies

- **Backend**: FastAPI (Python 3.11)
- **Base de données**: PostgreSQL 15
- **ORM**: SQLAlchemy 2.0
- **Authentification**: JWT (PyJWT)
- **Migrations**: Alembic
- **Tests**: Pytest
- **Emails**: FastAPI-Mail
- **Conteneurisation**: Docker & Docker Compose

## 📁 Structure du Projet

```
app/
├── main.py                   # Point d'entrée FastAPI
├── core/                    # Configuration et utilitaires
│   ├── config.py           # Paramètres de l'application
│   ├── database.py         # Configuration base de données
│   ├── security.py         # Utilitaires de sécurité
│   └── dependencies.py     # Dépendances FastAPI
├── models/                  # Modèles SQLAlchemy
│   ├── user.py             # Modèle utilisateur
│   └── weight_entry.py     # Modèle entrée de poids
├── schemas/                 # Schémas Pydantic
│   ├── common.py           # Schémas communs
│   ├── user.py             # Schémas utilisateur
│   ├── auth.py             # Schémas authentification
│   └── weight_entry.py     # Schémas entrée de poids
├── services/                # Logique métier
│   ├── user_service.py     # Service utilisateur
│   ├── auth_service.py     # Service authentification
│   ├── weight_entry_service.py # Service entrées de poids
│   └── email_service.py    # Service emails
├── routes/                  # Routes API
│   ├── auth.py             # Routes authentification
│   ├── users.py            # Routes utilisateurs
│   └── weight_entries.py   # Routes entrées de poids
├── utils/                   # Utilitaires
│   ├── pagination.py       # Utilitaires pagination
│   ├── token_generator.py  # Générateurs de tokens
│   └── bmi_calculator.py   # Calculs IMC
└── tests/                   # Tests unitaires
    ├── conftest.py         # Configuration tests
    └── test_auth.py        # Tests authentification
```

## 🐳 Installation avec Docker

### Prérequis

- Docker
- Docker Compose

### Démarrage rapide

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd peso
   ```

2. **Configurer les variables d'environnement**
   ```bash
   cp env.example .env
   # Éditer .env avec vos paramètres
   ```

3. **Lancer l'application**
   ```bash
   docker-compose up -d
   ```

4. **Accéder à l'API**
   - API: http://localhost:8000
   - Documentation Swagger: http://localhost:8000/docs
   - Documentation ReDoc: http://localhost:8000/redoc

### Variables d'environnement

Copiez `env.example` vers `.env` et configurez :

```env
# Base de données
DATABASE_URL=postgresql://peso_user:peso_password@db:5432/peso_db

# Sécurité
SECRET_KEY=votre-clé-secrète-très-sécurisée
ALGORITHM=HS256

# Email (pour la vérification et réinitialisation)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASSWORD=votre-mot-de-passe-app
FROM_EMAIL=votre-email@gmail.com
```

## 📚 API Endpoints

### Authentification
- `POST /api/v1/auth/register` - Inscription utilisateur
- `POST /api/v1/auth/login` - Connexion
- `POST /api/v1/auth/refresh` - Rafraîchir token
- `POST /api/v1/auth/verify-email` - Vérifier email
- `POST /api/v1/auth/forgot-password` - Mot de passe oublié
- `POST /api/v1/auth/reset-password` - Réinitialiser mot de passe

### Utilisateurs
- `GET /api/v1/users/me` - Profil utilisateur actuel
- `PUT /api/v1/users/me` - Modifier profil
- `POST /api/v1/users/me/change-password` - Changer mot de passe
- `DELETE /api/v1/users/me` - Désactiver compte
- `GET /api/v1/users` - Liste des utilisateurs (paginated)
- `GET /api/v1/users/{user_id}` - Profil public utilisateur

### Entrées de Poids
- `POST /api/v1/weight-entries` - Créer entrée
- `GET /api/v1/weight-entries` - Liste des entrées (paginated)
- `GET /api/v1/weight-entries/{entry_id}` - Détails entrée
- `PUT /api/v1/weight-entries/{entry_id}` - Modifier entrée
- `DELETE /api/v1/weight-entries/{entry_id}` - Supprimer entrée
- `GET /api/v1/weight-entries/latest` - Dernière entrée
- `GET /api/v1/weight-entries/progress/{days}` - Progression
- `GET /api/v1/weight-entries/statistics` - Statistiques

## 🧪 Tests

### Lancer les tests
```bash
# Avec Docker
docker-compose exec web pytest

# Localement
pytest
```

### Couverture des tests
```bash
pytest --cov=app --cov-report=html
```

## 🔧 Développement

### Installation locale

1. **Créer un environnement virtuel**
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   # ou
   venv\Scripts\activate     # Windows
   ```

2. **Installer les dépendances**
   ```bash
   pip install -r requirements.txt
   ```

3. **Configurer la base de données**
   ```bash
   # Créer les migrations
   alembic revision --autogenerate -m "Initial migration"
   
   # Appliquer les migrations
   alembic upgrade head
   ```

4. **Lancer l'application**
   ```bash
   uvicorn app.main:app --reload
   ```

### Commandes utiles

```bash
# Générer une nouvelle migration
alembic revision --autogenerate -m "Description"

# Appliquer les migrations
alembic upgrade head

# Annuler la dernière migration
alembic downgrade -1

# Voir l'état des migrations
alembic current
alembic history
```

## 📊 Format des Réponses

Toutes les réponses suivent un format standardisé :

### Réponse simple
```json
{
  "message": "Opération réussie",
  "success": true
}
```

### Réponse paginée
```json
{
  "data": [...],
  "metadata": {
    "page": 1,
    "limit": 20,
    "total": 58,
    "total_pages": 3
  }
}
```

### Réponse d'erreur
```json
{
  "message": "Description de l'erreur",
  "success": false,
  "error_code": "ERROR_CODE",
  "details": {...}
}
```

## 🔐 Sécurité

- **JWT** pour l'authentification
- **Mots de passe hashés** avec bcrypt
- **CORS** configuré
- **Validation des données** avec Pydantic
- **Protection contre les injections SQL** avec SQLAlchemy
- **Tokens d'expiration** configurés

## 📈 Performance

- **FastAPI** pour des performances optimales
- **Pool de connexions** PostgreSQL
- **Pagination** sur toutes les listes
- **Index de base de données** optimisés
- **Cache** possible avec Redis (à implémenter)

## 🚀 Déploiement

### Production

1. **Modifier les variables d'environnement**
   ```env
   DEBUG=false
   SECRET_KEY=clé-très-sécurisée-en-production
   ```

2. **Configurer un reverse proxy** (Nginx)
3. **Configurer SSL/TLS**
4. **Sauvegarder la base de données**
5. **Monitoring et logs**

### Docker Production
```bash
# Build optimisé
docker build -t peso-api .

# Lancer avec variables d'environnement
docker run -d \
  -p 8000:8000 \
  -e DATABASE_URL=... \
  -e SECRET_KEY=... \
  peso-api
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🆘 Support

Pour toute question ou problème :
- Ouvrir une issue sur GitHub
- Consulter la documentation API : http://localhost:8000/docs
- Vérifier les logs : `docker-compose logs web` 