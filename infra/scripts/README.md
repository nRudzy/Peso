# Scripts d'Infrastructure - Peso SaaS

Ce dossier contient les scripts utilitaires pour la gestion de l'infrastructure.

## Scripts Disponibles

### Déploiement
- `deploy.sh` - Script principal de déploiement
- `deploy-backend.sh` - Déploiement du backend uniquement
- `deploy-frontend.sh` - Déploiement du frontend uniquement
- `rollback.sh` - Rollback en cas de problème

### Base de Données
- `backup.sh` - Sauvegarde de la base de données
- `restore.sh` - Restauration de la base de données
- `migrate.sh` - Exécution des migrations

### Monitoring
- `health-check.sh` - Vérification de l'état des services
- `logs.sh` - Récupération des logs
- `monitor.sh` - Monitoring des ressources

### Maintenance
- `ssl-renew.sh` - Renouvellement des certificats SSL
- `cleanup.sh` - Nettoyage des ressources temporaires
- `update.sh` - Mise à jour des services

## Utilisation

```bash
# Rendre les scripts exécutables
chmod +x *.sh

# Déployer l'application
./deploy.sh

# Vérifier l'état des services
./health-check.sh

# Sauvegarder la base de données
./backup.sh
```

## Configuration

Les scripts utilisent les variables d'environnement définies dans `.env` :
- `AWS_REGION`
- `AWS_PROFILE`
- `ENVIRONMENT` (dev/staging/prod)
- `DOMAIN_NAME`
