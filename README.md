# 🏋️ API Peso - Suivi de perte de poids

Application Symfony pour le suivi de perte de poids avec API REST et authentification JWT.

## 🚀 Installation

### Prérequis
- Docker et Docker Compose installés
- WSL2 configuré (pour Windows)

### Démarrage rapide

1. **Cloner le projet**
```bash
git clone <repository-url>
cd peso
```

2. **Copier le fichier d'environnement**
```bash
cp env.example .env
```

3. **Lancer l'initialisation automatique**
```bash
./init-project.sh
```

### Installation manuelle

Si vous préférez une installation manuelle :

1. **Construire les conteneurs**
```bash
docker-compose build
```

2. **Démarrer les services**
```bash
docker-compose up -d
```

3. **Créer le projet Symfony**
```bash
docker-compose exec php composer create-project symfony/skeleton:"6.4.*" . --no-interaction
```

4. **Installer les dépendances**
```bash
docker-compose exec php composer require api-platform/api-pack lexik/jwt-authentication-bundle symfony/mailer symfony/orm-pack symfony/security-bundle symfony/validator symfony/maker-bundle --dev symfony/profiler-pack --dev
```

5. **Configurer les permissions**
```bash
docker-compose exec php chmod -R 777 var/
```

6. **Générer les clés JWT**
```bash
docker-compose exec php mkdir -p config/jwt
docker-compose exec php openssl genpkey -out config/jwt/private.pem -aes256 -algorithm rsa -pkeyopt rsa_keygen_bits:4096 -pass pass:your-super-secret-passphrase-change-in-production
docker-compose exec php openssl pkey -in config/jwt/private.pem -out config/jwt/public.pem -pubout -passin pass:your-super-secret-passphrase-change-in-production
docker-compose exec php chmod 644 config/jwt/public.pem
docker-compose exec php chmod 600 config/jwt/private.pem
```

## 🌐 Accès aux services

- **Application Symfony** : http://localhost:8080
- **Interface MailHog** : http://localhost:8025
- **Base de données PostgreSQL** : localhost:5432
  - Base : `peso_db`
  - Utilisateur : `peso_user`
  - Mot de passe : `peso_password`

## 📁 Structure du projet

```
peso/
├── docker/                    # Configuration Docker
│   ├── nginx/                # Configuration Nginx
│   ├── php/                  # Configuration PHP
│   └── postgres/             # Configuration PostgreSQL
├── src/
│   ├── Entity/               # Entités Doctrine
│   ├── Controller/           # Contrôleurs API
│   ├── Service/              # Services métiers
│   └── Repository/           # Repositories
├── config/                   # Configuration Symfony
├── migrations/               # Migrations Doctrine
├── public/                   # Point d'entrée web
├── templates/                # Templates Twig
├── tests/                    # Tests
├── docker-compose.yml        # Orchestration Docker
├── init-project.sh           # Script d'initialisation
└── README.md                 # Documentation
```

## 🔧 Configuration

### Variables d'environnement

Copiez `env.example` vers `.env` et modifiez les valeurs selon votre environnement :

```bash
# Base de données
DATABASE_URL="postgresql://peso_user:peso_password@postgres:5432/peso_db?serverVersion=15&charset=utf8"

# JWT
JWT_SECRET_KEY="your-super-secret-jwt-key-change-in-production"
JWT_PASSPHRASE="your-super-secret-passphrase-change-in-production"

# Email
MAILER_DSN="smtp://mailhog:1025"
```

## 🗄️ Base de données

### Créer les migrations
```bash
docker-compose exec php php bin/console make:migration
```

### Exécuter les migrations
```bash
docker-compose exec php php bin/console doctrine:migrations:migrate
```

### Charger les fixtures (si disponibles)
```bash
docker-compose exec php php bin/console doctrine:fixtures:load
```

## 🔐 Authentification JWT

L'API utilise l'authentification JWT via le bundle LexikJWTAuthenticationBundle.

### Endpoints d'authentification
- `POST /api/login` - Connexion utilisateur
- `POST /api/register` - Inscription utilisateur

### Utilisation des tokens
Incluez le token JWT dans l'en-tête Authorization :
```
Authorization: Bearer <votre-token-jwt>
```

## 📧 Emails

L'application utilise Symfony Mailer avec MailHog pour le développement.

- **SMTP** : localhost:1025
- **Interface web** : http://localhost:8025

## 🧪 Tests

```bash
# Lancer les tests
docker-compose exec php php bin/phpunit

# Lancer les tests avec couverture
docker-compose exec php php bin/phpunit --coverage-html var/coverage
```

## 🛠️ Commandes utiles

```bash
# Accéder au conteneur PHP
docker-compose exec php bash

# Vider le cache
docker-compose exec php php bin/console cache:clear

# Voir les routes
docker-compose exec php php bin/console debug:router

# Voir les services
docker-compose exec php php bin/console debug:container

# Créer une entité
docker-compose exec php php bin/console make:entity

# Créer un contrôleur
docker-compose exec php php bin/console make:controller
```

## 🚀 Déploiement

### Production

1. Modifiez les variables d'environnement pour la production
2. Utilisez un serveur SMTP réel au lieu de MailHog
3. Configurez un reverse proxy (Nginx/Apache)
4. Utilisez HTTPS
5. Changez les clés JWT

### Variables de production importantes
```bash
APP_ENV=prod
APP_SECRET=<secret-production>
JWT_SECRET_KEY=<jwt-secret-production>
JWT_PASSPHRASE=<jwt-passphrase-production>
MAILER_DSN=<smtp-production>
```

## 📝 API Documentation

Une fois l'application démarrée, la documentation API Platform est disponible sur :
- http://localhost:8080/api/docs

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails. 