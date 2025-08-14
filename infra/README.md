# 🏗️ Infrastructure - Peso SaaS

Ce dossier contient toute la configuration d'infrastructure pour le projet Peso SaaS, incluant Docker, Nginx, et les configurations de déploiement.

## 📁 Structure du Dossier

```
infra/
├── docker-compose.yml           # Configuration Docker Compose pour le développement
├── nginx/
│   └── nginx.conf              # Configuration Nginx reverse proxy
├── aws/                        # Configurations AWS (Terraform/CloudFormation)
├── scripts/                    # Scripts de déploiement et maintenance
├── NGINX_REVERSE_PROXY.md      # Documentation détaillée du reverse proxy
└── README.md                   # Ce fichier
```

## 🐳 Docker Compose

### Services Disponibles

- **backend** : API FastAPI (port 8000)
- **frontend** : Application Vue.js (port 3000)
- **db** : Base de données PostgreSQL (port 5432)
- **redis** : Cache Redis (port 6379)
- **nginx** : Reverse proxy Nginx (port 80)
- **mailpit** : Serveur SMTP de test (ports 1025, 8025)

### Commandes Utiles

```bash
# Démarrer l'environnement
docker-compose up -d

# Voir l'état des services
docker-compose ps

# Voir les logs
docker-compose logs -f [service_name]

# Arrêter l'environnement
docker-compose down

# Rebuild complet
docker-compose down --rmi all --volumes
docker-compose up -d --build
```

## 🔄 Reverse Proxy Nginx

Le reverse proxy Nginx permet d'avoir un point d'entrée unique (`localhost:80`) qui route automatiquement le trafic vers les services appropriés.

### Configuration

- **Fichier** : `nginx/nginx.conf`
- **Documentation** : `NGINX_REVERSE_PROXY.md`

### Routes Configurées

- `http://localhost/` → Frontend (port 3000)
- `http://localhost/api/v1/*` → Backend API (port 8000)
- `http://localhost/docs` → Documentation API
- `http://localhost/api/health` → Health check

## 📚 Documentation

### 📖 Configuration Nginx Reverse Proxy
**Fichier** : `NGINX_REVERSE_PROXY.md`

Documentation complète de la configuration Nginx, incluant :
- Architecture et flux de trafic
- Configuration technique détaillée
- Guide de dépannage
- Commandes de diagnostic
- Avantages de cette configuration

### 🔧 Dépannage

#### Problèmes Courants

1. **Erreur de connexion à la base de données**
   ```bash
   # Vérifier les logs du backend
   docker-compose logs backend
   
   # Vérifier l'état de la base de données
   docker-compose logs db
   ```

2. **Erreur 404 sur les routes API**
   ```bash
   # Vérifier la configuration Nginx
   docker-compose logs nginx
   
   # Tester directement le backend
   curl http://localhost:8000/health
   ```

3. **Frontend ne charge pas**
   ```bash
   # Vérifier les logs du frontend
   docker-compose logs frontend
   
   # Tester l'accès direct
   curl http://localhost:3000
   ```

#### Commandes de Diagnostic

```bash
# Vérifier l'état de tous les services
docker-compose ps

# Voir les logs en temps réel
docker-compose logs -f

# Tester la connectivité
curl -I http://localhost/
curl -I http://localhost/api/health

# Accéder à un conteneur
docker-compose exec backend bash
docker-compose exec frontend bash
docker-compose exec db psql -U peso -d peso_dev
```

## 🚀 Développement

### Workflow Typique

1. **Démarrer l'environnement**
   ```bash
   cd infra
   docker-compose up -d
   ```

2. **Développer**
   - Code dans `../backend/` et `../frontend/`
   - Les changements sont automatiquement rechargés

3. **Tester**
   - Frontend : http://localhost
   - API : http://localhost/api/v1/*
   - Documentation : http://localhost/docs

4. **Arrêter**
   ```bash
   docker-compose down
   ```

### Variables d'Environnement

Les variables d'environnement sont définies dans `docker-compose.yml` :

```yaml
# Backend
DATABASE_URL=postgresql://peso:password@db:5432/peso_dev
REDIS_URL=redis://redis:6379
SECRET_KEY=your-secret-key-change-in-production

# Frontend
VITE_API_URL=http://localhost/api
```

## 🔒 Sécurité

### Développement
- Headers CORS configurés pour le développement
- Base de données isolée dans Docker
- Pas d'exposition directe des services internes

### Production
- Configurer HTTPS
- Limiter les origines CORS
- Utiliser des secrets sécurisés
- Configurer un firewall

## 📊 Monitoring

### Logs
```bash
# Logs de tous les services
docker-compose logs

# Logs d'un service spécifique
docker-compose logs backend
docker-compose logs frontend
docker-compose logs nginx
```

### Métriques
- Health checks disponibles sur `/api/health`
- Logs structurés dans chaque service
- Monitoring des conteneurs via Docker

## 🔗 Liens Utiles

- [Documentation Docker Compose](https://docs.docker.com/compose/)
- [Documentation Nginx](https://nginx.org/en/docs/)
- [Configuration Reverse Proxy](NGINX_REVERSE_PROXY.md)
- [Documentation du projet principal](../../README.md)

---

**Dernière mise à jour** : 14 Août 2025  
**Version** : 1.0.0  
**Auteur** : Équipe Peso SaaS
