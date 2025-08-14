# Backend - Peso SaaS

Ce dossier contient le backend de l'application Peso, développé avec FastAPI.

## Structure

- `app/` - Code principal de l'API
- `tests/` - Tests unitaires et fonctionnels
- `alembic/` - Migrations de base de données
- `Dockerfile` - Configuration Docker pour le déploiement

## Technologies

- FastAPI
- SQLAlchemy
- Alembic (migrations)
- PostgreSQL
- Redis (cache)

## Développement

```bash
# Installer les dépendances
pip install -r requirements.txt

# Lancer le serveur de développement
uvicorn app.main:app --reload

# Exécuter les tests
pytest
```
