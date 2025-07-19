# 🏆 Guide de Qualité de Code - API Peso

Ce guide vous explique comment utiliser tous les outils de qualité de code mis en place dans ce projet.

## 📋 Outils Installés

### 🧪 Tests
- **PHPUnit** : Tests unitaires, d'intégration et fonctionnels
- **Infection** : Tests de mutation pour valider la qualité des tests

### 🔍 Analyse Statique
- **PHPStan** : Analyse statique de type et détection d'erreurs
- **Psalm** : Analyse statique avancée et vérification des types

### 🎨 Style de Code
- **PHP_CodeSniffer (PHPCS)** : Vérification du style de code
- **PHP-CS-Fixer** : Correction automatique du style de code

### 🏗️ Architecture & Qualité
- **Deptrac** : Validation de l'architecture et des dépendances
- **PHPMD** : Détection de code smell et métriques de complexité
- **Rector** : Modernisation automatique du code PHP
- **PHP Insights** : Analyse globale de qualité

## 🚀 Utilisation avec Make

### Commandes principales
```bash
# Installer toutes les dépendances
make install

# Lancer tous les tests
make test

# Lancer tous les outils de qualité
make quality

# Corriger automatiquement les problèmes
make fix

# Pipeline CI complet
make ci
```

### Tests
```bash
make test                    # Tous les tests
make test-coverage          # Tests avec couverture
make test-unit              # Tests unitaires seulement
make test-integration       # Tests d'intégration seulement
make test-functional        # Tests fonctionnels seulement
make infection              # Tests de mutation
```

### Analyse statique
```bash
make phpstan                # Analyse PHPStan
make psalm                  # Analyse Psalm
make psalm-baseline         # Générer baseline Psalm
```

### Style de code
```bash
make phpcs                  # Vérifier le style (PHPCS)
make phpcs-fix              # Corriger le style (PHPCBF)
make php-cs-fixer           # Vérifier le style (PHP-CS-Fixer)
make php-cs-fixer-fix       # Corriger le style (PHP-CS-Fixer)
```

### Architecture & Qualité
```bash
make deptrac                # Vérifier l'architecture
make deptrac-baseline       # Générer baseline Deptrac
make phpmd                  # Métriques de complexité
make phpinsights            # Analyse globale
make rector                 # Vérifier les améliorations
make rector-fix             # Appliquer les améliorations
```

### Utilitaires
```bash
make security-check         # Vérifier les vulnérabilités
make composer-validate      # Valider composer.json
make clear-cache           # Nettoyer les caches
make reports               # Générer tous les rapports
make clean                 # Nettoyer les fichiers générés
```

## 🎯 Utilisation avec Composer

Vous pouvez aussi utiliser directement les scripts Composer :

```bash
# Tests
composer test
composer test-coverage

# Analyse statique
composer phpstan
composer psalm

# Style
composer phpcs
composer php-cs-fixer

# Qualité
composer phpmd
composer deptrac
composer rector
composer phpinsights

# Combinées
composer quality           # Tous les outils de qualité
composer quality-fix       # Toutes les corrections automatiques
composer ci               # Pipeline CI
```

## 📊 Niveaux de Qualité

### PHPStan (Niveau 8/8)
- Niveau maximum d'analyse statique
- Détection des erreurs de type les plus strictes
- Vérification complète des annotations Doctrine et Symfony

### Psalm (Niveau 4/8)
- Analyse statique complémentaire à PHPStan
- Focus sur la sécurité des types
- Détection du code mort

### Couverture de Code
- **Minimum requis** : 80%
- **Objectif** : 90%+
- Rapports HTML générés dans `var/coverage/`

### Tests de Mutation (Infection)
- **MSI minimum** : 70%
- **MSI couvert minimum** : 80%
- Valide la qualité réelle des tests

## 🎨 Standards de Code

### Style de Code
- **Standard** : PSR-12 + Symfony
- **Longueur de ligne** : 120 caractères max
- **Syntaxe** : Arrays courte `[]`, strict types, etc.

### Architecture
- **Séparation des couches** : Controller → Service → Repository → Entity
- **Injection de dépendances** : Constructor injection
- **Pas de dépendances circulaires**

## 🔧 Configuration

### Fichiers de Configuration
```
├── phpunit.xml.dist        # Configuration PHPUnit
├── phpstan.neon           # Configuration PHPStan
├── psalm.xml              # Configuration Psalm
├── phpcs.xml              # Configuration PHP_CodeSniffer
├── .php-cs-fixer.dist.php # Configuration PHP-CS-Fixer
├── phpmd.xml              # Configuration PHPMD
├── deptrac.yaml           # Configuration Deptrac
├── rector.php             # Configuration Rector
├── infection.json.dist    # Configuration Infection
├── phpinsights.php        # Configuration PHP Insights
└── Makefile               # Raccourcis Make
```

### Variables d'Environnement Test
```bash
# Base de données de test
DATABASE_URL="postgresql://peso_user:peso_password@postgres:5432/peso_test"
APP_ENV=test
```

## 🏃 Workflow de Développement

### 1. Avant chaque commit
```bash
make quality-fix           # Corriger automatiquement
make quality              # Vérifier tout reste
make test                 # Lancer les tests
```

### 2. Avant chaque push
```bash
make ci                   # Pipeline complet
```

### 3. Intégration Continue
GitHub Actions lance automatiquement :
- Validation PHP syntax
- Tests avec couverture
- Analyse statique (PHPStan + Psalm)
- Vérification style (PHPCS + PHP-CS-Fixer)
- Métriques de qualité (PHPMD)
- Audit de sécurité

## 📈 Métriques Cibles

### Couverture de Code
- **Lignes** : > 80%
- **Méthodes** : > 85%
- **Classes** : > 90%

### Complexité
- **Complexité cyclomatique** : < 10 par méthode
- **Méthodes par classe** : < 20
- **Lignes par méthode** : < 30

### Architecture
- **Couplage** : < 15 dépendances par classe
- **Cohésion** : LCOM < 2
- **Respect des couches** : 100%

## 🛠️ Dépannage

### Erreur de cache
```bash
make clear-cache
```

### Problèmes de permissions
```bash
docker-compose exec php chmod -R 777 var/
```

### Base de données de test
```bash
docker-compose exec php php bin/console doctrine:database:drop --force --env=test
docker-compose exec php php bin/console doctrine:database:create --env=test
docker-compose exec php php bin/console doctrine:schema:create --env=test
```

### Baseline pour outils stricts
Si vous avez beaucoup d'erreurs au début :
```bash
make psalm-baseline        # Créer baseline Psalm
make deptrac-baseline      # Créer baseline Deptrac
```

## 📚 Ressources

- [PHPUnit Documentation](https://phpunit.de/documentation.html)
- [PHPStan User Guide](https://phpstan.org/user-guide/getting-started)
- [Psalm Documentation](https://psalm.dev/docs/)
- [PHP-CS-Fixer Rules](https://cs.symfony.com/)
- [PHPMD Rules](https://phpmd.org/rules/index.html)
- [Deptrac Documentation](https://qossmic.github.io/deptrac/)
- [Rector Documentation](https://getrector.org/)

## 🎉 Bonnes Pratiques

1. **Lancez les outils régulièrement** pendant le développement
2. **Corrigez les erreurs dès qu'elles apparaissent**
3. **Utilisez les baselines** uniquement pour du code legacy
4. **Écrivez des tests** avant le code (TDD)
5. **Respectez l'architecture** définie par Deptrac
6. **Documentez votre code** avec des PHPDoc
7. **Utilisez le typage strict** partout où c'est possible

---

💡 **Tip** : Utilisez `make help` pour voir toutes les commandes disponibles ! 