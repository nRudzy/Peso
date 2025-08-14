# Infrastructure - Peso SaaS

Ce dossier contient toute la configuration d'infrastructure et de déploiement pour Peso.

## Structure

- `docker-compose.yml` - Configuration multi-services pour le développement local
- `nginx/` - Configuration Nginx (reverse proxy, load balancing)
- `aws/` - Configurations Terraform et CloudFormation pour AWS
- `scripts/` - Scripts de setup, déploiement et backup

## Technologies

- Docker & Docker Compose
- Nginx
- Mailpit (email testing)
- AWS (EC2, RDS, S3, CloudFront, etc.)
- Terraform
- CloudFormation
- GitHub Actions (CI/CD)

## Développement Local

```bash
# Lancer l'environnement complet
docker-compose up -d

# Arrêter l'environnement
docker-compose down

# Voir les logs
docker-compose logs -f
```

## Déploiement

```bash
# Déployer sur AWS
./scripts/deploy.sh

# Backup de la base de données
./scripts/backup.sh

# Restauration
./scripts/restore.sh
```
