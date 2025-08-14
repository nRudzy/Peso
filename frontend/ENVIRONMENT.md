# Configuration par Environnement - Frontend

## Vue d'ensemble

Le frontend utilise une configuration par environnement pour gérer les URLs de l'API selon le contexte de déploiement.

## Variables d'Environnement

### Variables Disponibles

- `VITE_API_URL` : URL de l'API backend
- `VITE_APP_ENV` : Environnement de l'application (development, staging, production)

### Configuration par Environnement

#### Développement Local (Docker)
```bash
VITE_API_URL=http://localhost:8000
VITE_APP_ENV=development
```

#### Staging
```bash
VITE_API_URL=https://api-staging.peso.com
VITE_APP_ENV=staging
```

#### Production
```bash
VITE_API_URL=https://api.peso.com
VITE_APP_ENV=production
```

## Fonctionnement

### En Développement
- Le proxy Vite redirige automatiquement `/api/*` vers `http://localhost:8000`
- Les appels API utilisent des URLs relatives (ex: `/api/v1/weight-entries`)
- Pas de problèmes CORS car tout passe par le même serveur

### En Production
- Les appels API utilisent l'URL complète définie dans `VITE_API_URL`
- Configuration CORS nécessaire côté backend
- URLs absolues (ex: `https://api.peso.com/v1/weight-entries`)

## Utilisation dans le Code

```javascript
import { weightEntriesApi } from '@/services/api'

// L'URL sera automatiquement correcte selon l'environnement
const entries = await weightEntriesApi.getWeightEntries()
```

## Configuration Docker

Le fichier `docker-compose.yml` définit déjà la variable d'environnement :

```yaml
frontend:
  environment:
    - VITE_API_URL=http://localhost:8000
```

## Déploiement

### Variables d'Environnement Requises

Pour chaque environnement, définir :

1. **Développement** : `VITE_API_URL=http://localhost:8000`
2. **Staging** : `VITE_API_URL=https://api-staging.peso.com`
3. **Production** : `VITE_API_URL=https://api.peso.com`

### Build de Production

```bash
# Build avec variables d'environnement
VITE_API_URL=https://api.peso.com npm run build
```

## Sécurité

- Les variables d'environnement sont intégrées au build
- Ne pas commiter de secrets dans les fichiers `.env`
- Utiliser des variables d'environnement sécurisées en production
