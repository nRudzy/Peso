# Peso - SaaS de Suivi de Poids

Un SaaS complet pour le suivi de poids avec backend FastAPI, frontend VueJS, application mobile et infrastructure AWS.

## 🚀 Fonctionnalités

- **Backend API** - FastAPI avec authentification JWT et gestion des utilisateurs
- **Frontend Web** - Application VueJS moderne avec interface utilisateur intuitive
- **Application Mobile** - App React Native/Ionic pour iOS et Android
- **Infrastructure Cloud** - Déploiement automatisé sur AWS avec Terraform/CloudFormation
- **Base de données** - PostgreSQL avec migrations Alembic
- **Cache** - Redis pour les performances
- **Monitoring** - Logs et métriques centralisés
- **CI/CD** - Pipeline automatisé avec GitHub Actions

## 🛠️ Stack Technologique

### Backend
- **FastAPI** - Framework Python moderne et performant
- **SQLAlchemy** - ORM pour la base de données
- **Alembic** - Migrations de base de données
- **PostgreSQL** - Base de données principale
- **Redis** - Cache et sessions

### Frontend
- **Vue.js 3** - Framework JavaScript progressif
- **Vite** - Build tool moderne
- **Tailwind CSS** - Framework CSS utilitaire
- **Pinia** - State management
- **Vue Router** - Routing

### Mobile
- **React Native** ou **Ionic** - Framework mobile cross-platform
- **Expo** (si React Native) - Outils de développement
- **Capacitor** (si Ionic) - Build natif

### Infrastructure
- **Docker** - Conteneurisation
- **AWS** - Cloud provider
- **Terraform** - Infrastructure as Code
- **CloudFormation** - Templates AWS
- **Nginx** - Reverse proxy
- **GitHub Actions** - CI/CD

## 📁 Structure du Monorepo

```
peso/
├── backend/                  # Backend FastAPI
│   ├── app/                  # Code principal de l'API
│   ├── tests/                # Tests unitaires / fonctionnels
│   ├── alembic/              # Migrations DB
│   └── Dockerfile            # Conteneur backend
├── frontend/                 # Frontend VueJS
│   ├── public/               # Fichiers statiques
│   ├── src/                  # Vue components, views, store
│   └── Dockerfile            # Conteneur frontend
├── mobile-app/               # App mobile (React Native ou Ionic)
│   ├── src/                  # Code mobile
│   └── README.md             # Notes spécifiques mobile
├── infra/                    # Infrastructure & déploiement
│   ├── docker-compose.yml    # Pour dev local multi-services
│   ├── nginx/                # Config nginx si besoin de reverse proxy
│   ├── aws/                  # Configs Terraform / CloudFormation
│   └── scripts/              # Scripts de setup / deploy / backup
├── .env                      # Fichier d'environnement général
├── README.md                 # Documentation projet
└── LICENSE                   # Licence open-source ou commerciale
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

3. **Lancer l'environnement complet**
   ```bash
   # Option 1: Script automatique
   ./dev.sh
   
   # Option 2: Manuel
   cd infra
   docker-compose up -d
   ```

4. **Accéder aux services**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - Documentation API: http://localhost:8000/docs
   - Nginx (reverse proxy): http://localhost:80
   - Mailpit (emails): http://localhost:8025

## 🚀 Développement

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Mobile App
```bash
cd mobile-app
npm install
# Pour React Native
npx expo start
# Pour Ionic
ionic serve
```

## 🌐 Déploiement

### Infrastructure AWS

1. **Configurer AWS CLI**
   ```bash
   aws configure
   ```

2. **Déployer avec Terraform**
   ```bash
   cd infra/aws/terraform
   terraform init
   terraform plan
   terraform apply
   ```

3. **Ou déployer avec CloudFormation**
   ```bash
   cd infra/aws/cloudformation
   aws cloudformation create-stack --stack-name peso --template-body file://main.yaml
   ```

### Scripts de déploiement

```bash
# Déployer l'application complète
./infra/scripts/deploy.sh

# Sauvegarder la base de données
./infra/scripts/backup.sh

# Vérifier l'état des services
./infra/scripts/health-check.sh
```

## 📚 Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [API Documentation](backend/README.md)
- [Frontend Guide](frontend/README.md)
- [Mobile App Guide](mobile-app/README.md)
- [Infrastructure Guide](infra/README.md)
- [Deployment Guide](docs/DEPLOYMENT.md)

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Support

Pour toute question ou support :
- Ouvrir une issue sur GitHub
- Consulter la documentation
- Contacter l'équipe de développement 