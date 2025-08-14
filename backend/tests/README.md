# Backend Tests

Ce dossier contient tous les tests pour le backend FastAPI.

## Structure Recommandée

```
tests/
├── __init__.py
├── conftest.py           # Configuration pytest et fixtures
├── test_main.py          # Tests du point d'entrée
├── unit/                 # Tests unitaires
│   ├── __init__.py
│   ├── test_models.py
│   ├── test_schemas.py
│   └── test_utils.py
├── integration/          # Tests d'intégration
│   ├── __init__.py
│   ├── test_auth.py
│   ├── test_users.py
│   └── test_weights.py
└── fixtures/             # Données de test
    ├── __init__.py
    ├── users.py
    └── weights.py
```

## Types de Tests

- **Tests unitaires** : Testent des fonctions/méthodes isolées
- **Tests d'intégration** : Testent l'interaction entre composants
- **Tests API** : Testent les endpoints HTTP
- **Tests de base de données** : Testent les opérations DB

## Exécution

```bash
# Tous les tests
pytest

# Tests unitaires uniquement
pytest tests/unit/

# Tests avec couverture
pytest --cov=app

# Tests en mode verbose
pytest -v

# Tests avec rapport HTML
pytest --cov=app --cov-report=html
```

## Bonnes Pratiques

- Un test par fonctionnalité
- Utiliser des fixtures pour les données de test
- Nettoyer la base de données après chaque test
- Tester les cas d'erreur et les cas limites
