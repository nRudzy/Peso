# Backend App - Code Principal

Ce dossier contient le code principal de l'API FastAPI.

## Structure Recommandée

```
app/
├── __init__.py
├── main.py              # Point d'entrée de l'application
├── config.py            # Configuration de l'application
├── database.py          # Configuration de la base de données
├── models/              # Modèles SQLAlchemy
│   ├── __init__.py
│   ├── user.py
│   └── weight.py
├── schemas/             # Schémas Pydantic
│   ├── __init__.py
│   ├── user.py
│   └── weight.py
├── api/                 # Routes API
│   ├── __init__.py
│   ├── v1/
│   │   ├── __init__.py
│   │   ├── auth.py
│   │   ├── users.py
│   │   └── weights.py
│   └── deps.py          # Dépendances (auth, etc.)
├── core/                # Logique métier
│   ├── __init__.py
│   ├── auth.py
│   ├── security.py
│   └── email.py
└── utils/               # Utilitaires
    ├── __init__.py
    └── helpers.py
```

## Technologies

- FastAPI
- SQLAlchemy (ORM)
- Pydantic (validation)
- Alembic (migrations)
- JWT (authentification)
