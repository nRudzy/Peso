# 🔄 Configuration Nginx Reverse Proxy - Peso SaaS

## 📋 Vue d'ensemble

Cette documentation décrit la configuration Nginx reverse proxy utilisée dans l'environnement de développement Peso SaaS. Le reverse proxy permet d'avoir un point d'entrée unique (`localhost:80`) qui route automatiquement le trafic vers les services appropriés.

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────┐    ┌─────────────┐
│   Utilisateur   │───▶│   Nginx     │───▶│  Frontend   │
│  localhost:80   │    │   Port 80   │    │  Port 3000  │
└─────────────────┘    └─────────────┘    └─────────────┘
                              │
                              ▼
                       ┌─────────────┐
                       │   Backend   │
                       │  Port 8000  │
                       └─────────────┘
```

## 🌐 Configuration des Routes

### Routes Frontend
- **URL** : `http://localhost/`
- **Destination** : `frontend:3000`
- **Description** : Toutes les routes non-API sont servies par le frontend Vue.js

### Routes API Backend
- **URL** : `http://localhost/api/v1/*`
- **Destination** : `backend:8000/api/v1/*`
- **Description** : Toutes les routes API sont routées vers le backend FastAPI

### Documentation API
- **URL** : `http://localhost/docs`
- **Destination** : `backend:8000/docs`
- **Description** : Interface Swagger UI pour la documentation de l'API

### Schéma OpenAPI
- **URL** : `http://localhost/openapi.json`
- **Destination** : `backend:8000/openapi.json`
- **Description** : Schéma OpenAPI au format JSON

### Health Check
- **URL** : `http://localhost/api/health`
- **Destination** : `backend:8000/health`
- **Description** : Endpoint de vérification de l'état du service

## 📁 Fichiers de Configuration

### Configuration Nginx
- **Fichier** : `infra/nginx/nginx.conf`
- **Description** : Configuration principale du reverse proxy

### Docker Compose
- **Fichier** : `infra/docker-compose.yml`
- **Service** : `nginx`
- **Port** : `80:80`

## ⚙️ Configuration Technique

### Configuration Nginx Principale

```nginx
# API routes - intercept calls to backend
location /api/ {
    proxy_pass http://backend/api/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    
    # Handle CORS for API calls
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS";
    add_header Access-Control-Allow-Headers "DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization";
    
    # Handle preflight requests
    if ($request_method = 'OPTIONS') {
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS";
        add_header Access-Control-Allow-Headers "DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization";
        add_header Access-Control-Max-Age 1728000;
        add_header Content-Type 'text/plain; charset=utf-8';
        add_header Content-Length 0;
        return 204;
    }
}

# Documentation routes
location /docs {
    proxy_pass http://backend/docs;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}

location /openapi.json {
    proxy_pass http://backend/openapi.json;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}

# All other routes go to frontend
location / {
    proxy_pass http://frontend;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    
    # WebSocket support for development
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```

### Configuration Frontend

Le frontend est configuré pour utiliser `/api` comme base URL :

```javascript
// frontend/src/services/api.js
const getApiUrl = () => {
  // In development, use relative URL to leverage Nginx proxy
  if (import.meta.env.DEV) {
    return '/api'
  }
  
  // In production, use the full API URL from environment
  return import.meta.env.VITE_API_URL || '/api'
}
```

### Variables d'Environnement

```yaml
# infra/docker-compose.yml
frontend:
  environment:
    - VITE_API_URL=http://localhost/api
```

## 🚀 Démarrage et Utilisation

### 1. Démarrer l'environnement complet
```bash
cd infra
docker-compose up -d
```

### 2. Accéder aux services
- **Frontend** : http://localhost
- **API Backend** : http://localhost/api/v1/*
- **Documentation** : http://localhost/docs
- **Health Check** : http://localhost/api/health

### 3. Tester l'API
```bash
# Test de l'API
curl -X POST http://localhost/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test"}'

# Test de la documentation
curl http://localhost/docs

# Test du health check
curl http://localhost/api/health
```

## 🔧 Dépannage

### Problèmes Courants

#### 1. Erreur 404 sur les routes API
**Symptôme** : Les appels API retournent 404
**Solution** : Vérifier que la configuration Nginx redirige correctement vers `/api/`

#### 2. Erreur CORS
**Symptôme** : Erreurs CORS dans le navigateur
**Solution** : Les headers CORS sont configurés dans Nginx, vérifier qu'ils sont présents

#### 3. Frontend ne charge pas
**Symptôme** : Page blanche ou erreur de connexion
**Solution** : Vérifier que le service frontend est démarré et accessible

### Commandes de Diagnostic

```bash
# Vérifier l'état des services
docker-compose ps

# Voir les logs Nginx
docker-compose logs nginx

# Voir les logs du backend
docker-compose logs backend

# Voir les logs du frontend
docker-compose logs frontend

# Tester la connectivité
curl -I http://localhost/
curl -I http://localhost/api/health
```

## 🔄 Redémarrage des Services

### Redémarrer Nginx uniquement
```bash
docker-compose restart nginx
```

### Redémarrer tous les services
```bash
docker-compose down
docker-compose up -d
```

### Redémarrer avec reconstruction
```bash
docker-compose down
docker-compose up -d --build
```

## 📊 Avantages de cette Configuration

### 1. **URL Unique**
- Un seul point d'entrée (`localhost:80`)
- Pas besoin de se souvenir des ports des différents services

### 2. **Routage Automatique**
- Les appels API sont automatiquement routés vers le backend
- Le frontend est servi pour toutes les autres routes

### 3. **Gestion CORS**
- Headers CORS configurés automatiquement
- Support des requêtes preflight OPTIONS

### 4. **Support WebSocket**
- Configuration pour le hot reload en développement
- Support des connexions WebSocket

### 5. **Production Ready**
- Configuration similaire à un environnement de production
- Facilite la migration vers la production

## 🔒 Sécurité

### Headers de Sécurité
- Headers de proxy configurés pour préserver les informations de requête
- Headers CORS configurés pour le développement

### Recommandations Production
- Configurer HTTPS en production
- Limiter les origines CORS autorisées
- Ajouter des headers de sécurité supplémentaires

## 📝 Notes de Développement

### Proxy Vite Désactivé
Le proxy Vite du frontend a été désactivé car Nginx gère maintenant le routage :

```javascript
// frontend/vite.config.js
// Proxy disabled when using Nginx reverse proxy
// proxy: {
//   '/api': {
//     target: apiUrl,
//     changeOrigin: true,
//     secure: false,
//     ...
//   }
// }
```

### Variables d'Environnement
- `VITE_API_URL` : URL de l'API pour le frontend
- En développement : `http://localhost/api`
- En production : URL complète de l'API

## 🔗 Liens Utiles

- [Documentation Nginx](https://nginx.org/en/docs/)
- [Configuration Reverse Proxy Nginx](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)
- [Headers CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Documentation FastAPI](https://fastapi.tiangolo.com/)

---

**Dernière mise à jour** : 14 Août 2025  
**Version** : 1.0.0  
**Auteur** : Équipe Peso SaaS
