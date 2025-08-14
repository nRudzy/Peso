# AWS Infrastructure - Peso SaaS

Ce dossier contient les configurations d'infrastructure AWS pour Peso.

## Structure

- `terraform/` - Configurations Terraform pour l'infrastructure
- `cloudformation/` - Templates CloudFormation
- `scripts/` - Scripts de déploiement AWS

## Services AWS Utilisés

- **EC2** - Serveurs d'application
- **RDS** - Base de données PostgreSQL
- **ElastiCache** - Cache Redis
- **S3** - Stockage de fichiers statiques
- **CloudFront** - CDN
- **Route 53** - DNS
- **ALB** - Load Balancer
- **ECS** - Conteneurs (optionnel)
- **Lambda** - Fonctions serverless (optionnel)

## Déploiement

### Terraform
```bash
# Initialiser Terraform
terraform init

# Planifier les changements
terraform plan

# Appliquer les changements
terraform apply

# Détruire l'infrastructure
terraform destroy
```

### CloudFormation
```bash
# Déployer un stack
aws cloudformation create-stack \
  --stack-name peso-production \
  --template-body file://main.yaml \
  --parameters file://parameters.json

# Mettre à jour un stack
aws cloudformation update-stack \
  --stack-name peso-production \
  --template-body file://main.yaml
```
