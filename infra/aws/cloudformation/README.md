# CloudFormation Templates

Ce dossier contient les templates CloudFormation pour déployer l'infrastructure AWS de Peso.

## Structure

```
cloudformation/
├── main.yaml             # Template principal
├── parameters.json       # Paramètres par défaut
├── templates/            # Templates modulaires
│   ├── vpc.yaml
│   ├── rds.yaml
│   ├── ec2.yaml
│   ├── alb.yaml
│   └── s3.yaml
├── environments/         # Configurations par environnement
│   ├── dev/
│   │   ├── parameters.json
│   │   └── tags.json
│   ├── staging/
│   └── prod/
└── scripts/              # Scripts de déploiement
    ├── deploy.sh
    ├── update.sh
    └── delete.sh
```

## Stacks CloudFormation

- **peso-vpc** - Réseau VPC et sous-réseaux
- **peso-rds** - Base de données PostgreSQL
- **peso-ec2** - Serveurs d'application
- **peso-alb** - Load Balancer
- **peso-s3** - Stockage de fichiers
- **peso-cloudfront** - CDN

## Utilisation

```bash
# Déployer un stack
aws cloudformation create-stack \
  --stack-name peso-vpc \
  --template-body file://templates/vpc.yaml \
  --parameters file://environments/dev/parameters.json \
  --tags file://environments/dev/tags.json

# Mettre à jour un stack
aws cloudformation update-stack \
  --stack-name peso-vpc \
  --template-body file://templates/vpc.yaml \
  --parameters file://environments/dev/parameters.json

# Supprimer un stack
aws cloudformation delete-stack --stack-name peso-vpc
```

## Paramètres

- `Environment` - dev/staging/prod
- `ProjectName` - Nom du projet
- `DomainName` - Nom de domaine
- `DBPassword` - Mot de passe de la base de données
- `InstanceType` - Type d'instance EC2
