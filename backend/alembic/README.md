# Alembic Migrations

Ce dossier contient les migrations de base de données gérées par Alembic.

## Structure

```
alembic/
├── versions/             # Fichiers de migration
│   ├── 001_initial.py
│   ├── 002_add_users.py
│   └── 003_add_weights.py
├── env.py               # Configuration de l'environnement
├── script.py.mako       # Template pour les migrations
└── alembic.ini          # Configuration Alembic
```

## Commandes Utiles

```bash
# Initialiser Alembic (première fois)
alembic init alembic

# Créer une nouvelle migration
alembic revision --autogenerate -m "Description de la migration"

# Appliquer les migrations
alembic upgrade head

# Revenir en arrière
alembic downgrade -1

# Voir l'état actuel
alembic current

# Voir l'historique des migrations
alembic history

# Voir les migrations en attente
alembic show head
```

## Bonnes Pratiques

- Toujours décrire clairement les migrations
- Tester les migrations sur un environnement de développement
- Créer des migrations réversibles quand possible
- Sauvegarder la base avant d'appliquer en production
- Utiliser `--autogenerate` avec précaution

## Workflow

1. Modifier les modèles SQLAlchemy
2. Générer la migration : `alembic revision --autogenerate -m "Description"`
3. Vérifier le fichier de migration généré
4. Appliquer : `alembic upgrade head`
5. Tester l'application
