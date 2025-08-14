# Terraform Infrastructure

Ce dossier contient les configurations Terraform pour déployer l'infrastructure AWS de Peso.

## Structure

```
terraform/
├── main.tf               # Configuration principale
├── variables.tf          # Variables d'entrée
├── outputs.tf            # Variables de sortie
├── providers.tf          # Configuration des providers
├── modules/              # Modules Terraform réutilisables
│   ├── vpc/
│   ├── rds/
│   ├── ecs/
│   └── alb/
├── environments/         # Configurations par environnement
│   ├── dev/
│   ├── staging/
│   └── prod/
└── scripts/              # Scripts Terraform
    ├── init.sh
    ├── plan.sh
    └── apply.sh
```

## Ressources AWS

- **VPC** - Réseau privé
- **EC2** - Serveurs d'application
- **RDS** - Base de données PostgreSQL
- **ElastiCache** - Cache Redis
- **ALB** - Load Balancer
- **S3** - Stockage de fichiers
- **CloudFront** - CDN
- **Route 53** - DNS
- **ACM** - Certificats SSL

## Utilisation

```bash
# Initialiser Terraform
terraform init

# Planifier les changements
terraform plan -var-file="environments/dev.tfvars"

# Appliquer les changements
terraform apply -var-file="environments/dev.tfvars"

# Détruire l'infrastructure
terraform destroy -var-file="environments/dev.tfvars"
```

## Variables d'Environnement

- `environment` - dev/staging/prod
- `project_name` - Nom du projet
- `domain_name` - Nom de domaine
- `db_password` - Mot de passe de la base de données
- `instance_type` - Type d'instance EC2
