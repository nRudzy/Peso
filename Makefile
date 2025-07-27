# Peso - Makefile
# Commandes utiles pour le développement

.PHONY: help install test test-cleanup test-coverage test-watch lint format clean docker-up docker-down docker-logs docker-shell migrate migrate-create migrate-upgrade migrate-downgrade migrate-history setup-dev run-dev run-prod clean-db clean-test-db docs

# Variables
PYTHON = python
PIP = pip
PYTEST = python -m pytest
UVICORN = uvicorn
APP_MODULE = app.main:app
VENV_PATH = venv/bin/activate

# Couleurs pour les messages
GREEN = \033[0;32m
YELLOW = \033[1;33m
RED = \033[0;31m
NC = \033[0m # No Color

help: ## Afficher cette aide
	@echo "$(GREEN)Peso - Commandes disponibles:$(NC)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(YELLOW)%-20s$(NC) %s\n", $$1, $$2}'
	@echo ""
	@echo "$(GREEN)Environnement virtuel:$(NC)"
	@echo "  source $(VENV_PATH)  # Activer l'environnement virtuel"
	@echo ""

install: ## Installer les dépendances
	@echo "$(GREEN)Installation des dépendances...$(NC)"
	$(PIP) install -r requirements.txt
	@echo "$(GREEN)✅ Dépendances installées$(NC)"

install-dev: ## Installer les dépendances de développement
	@echo "$(GREEN)Installation des dépendances de développement...$(NC)"
	$(PIP) install -r requirements.txt
	$(PIP) install pytest-cov pytest-watch black isort flake8
	@echo "$(GREEN)✅ Dépendances de développement installées$(NC)"

test: ## Lancer tous les tests
	@echo "$(GREEN)Lancement des tests...$(NC)"
	$(PYTEST) app/tests/ -v

test-cleanup: ## Lancer les tests de nettoyage spécifiquement
	@echo "$(GREEN)Lancement des tests de nettoyage...$(NC)"
	$(PYTEST) app/tests/test_cleanup.py -v

test-coverage: ## Lancer les tests avec couverture de code
	@echo "$(GREEN)Lancement des tests avec couverture...$(NC)"
	$(PYTEST) app/tests/ --cov=app --cov-report=html --cov-report=term-missing

test-watch: ## Lancer les tests en mode watch (nécessite pytest-watch)
	@echo "$(GREEN)Lancement des tests en mode watch...$(NC)"
	ptw app/tests/ -- -v

test-file: ## Lancer les tests d'un fichier spécifique (usage: make test-file FILE=test_users.py)
	@if [ -z "$(FILE)" ]; then \
		echo "$(RED)Erreur: Spécifiez un fichier avec FILE=nom_du_fichier$(NC)"; \
		echo "Exemple: make test-file FILE=test_users.py"; \
		exit 1; \
	fi
	@echo "$(GREEN)Lancement des tests du fichier $(FILE)...$(NC)"
	$(PYTEST) app/tests/$(FILE) -v

test-function: ## Lancer un test spécifique (usage: make test-function TEST=test_get_current_user_profile)
	@if [ -z "$(TEST)" ]; then \
		echo "$(RED)Erreur: Spécifiez un test avec TEST=nom_du_test$(NC)"; \
		echo "Exemple: make test-function TEST=test_get_current_user_profile"; \
		exit 1; \
	fi
	@echo "$(GREEN)Lancement du test $(TEST)...$(NC)"
	$(PYTEST) app/tests/ -k "$(TEST)" -v

lint: ## Lancer le linter (flake8)
	@echo "$(GREEN)Vérification du style de code...$(NC)"
	flake8 app/ --max-line-length=88 --extend-ignore=E203,W503

format: ## Formater le code avec black et isort
	@echo "$(GREEN)Formatage du code...$(NC)"
	black app/ --line-length=88
	isort app/ --profile=black

format-check: ## Vérifier le formatage sans modifier
	@echo "$(GREEN)Vérification du formatage...$(NC)"
	black app/ --line-length=88 --check
	isort app/ --profile=black --check-only

clean: ## Nettoyer les fichiers temporaires
	@echo "$(GREEN)Nettoyage des fichiers temporaires...$(NC)"
	find . -type f -name "*.pyc" -delete
	find . -type d -name "__pycache__" -delete
	find . -type d -name "*.egg-info" -exec rm -rf {} +
	rm -rf .pytest_cache/
	rm -rf htmlcov/
	rm -rf .coverage
	@echo "$(GREEN)✅ Nettoyage terminé$(NC)"

clean-db: ## Nettoyer la base de données de développement
	@echo "$(GREEN)Nettoyage de la base de données...$(NC)"
	@echo "$(YELLOW)⚠️  Attention: Cette action supprime toutes les données!$(NC)"
	@read -p "Êtes-vous sûr? (y/N): " confirm && [ "$$confirm" = "y" ] || exit 1
	docker-compose down -v
	docker-compose up -d db
	@echo "$(GREEN)✅ Base de données nettoyée$(NC)"

clean-test-db: ## Nettoyer manuellement la base de données de test
	@echo "$(GREEN)Nettoyage de la base de données de test...$(NC)"
	$(PYTHON) scripts/clean_test_db.py

docker-up: ## Démarrer les services Docker
	@echo "$(GREEN)Démarrage des services Docker...$(NC)"
	docker-compose up -d

docker-down: ## Arrêter les services Docker
	@echo "$(GREEN)Arrêt des services Docker...$(NC)"
	docker-compose down

docker-logs: ## Afficher les logs Docker
	@echo "$(GREEN)Logs des services Docker...$(NC)"
	docker-compose logs -f

docker-shell: ## Ouvrir un shell dans le conteneur web
	@echo "$(GREEN)Ouverture d'un shell dans le conteneur web...$(NC)"
	docker-compose exec web bash

migrate: ## Appliquer toutes les migrations
	@echo "$(GREEN)Application des migrations...$(NC)"
	docker-compose run --rm migrations

migrate-create: ## Créer une nouvelle migration (usage: make migrate-create NAME=nom_migration)
	@if [ -z "$(NAME)" ]; then \
		echo "$(RED)Erreur: Spécifiez un nom avec NAME=nom_migration$(NC)"; \
		echo "Exemple: make migrate-create NAME=add_user_table"; \
		exit 1; \
	fi
	@echo "$(GREEN)Création de la migration $(NAME)...$(NC)"
	docker-compose run --rm web alembic revision --autogenerate -m "$(NAME)"

migrate-upgrade: ## Appliquer les migrations en attente
	@echo "$(GREEN)Application des migrations en attente...$(NC)"
	docker-compose run --rm web alembic upgrade head

migrate-downgrade: ## Annuler la dernière migration
	@echo "$(GREEN)Annulation de la dernière migration...$(NC)"
	docker-compose run --rm web alembic downgrade -1

migrate-history: ## Afficher l'historique des migrations
	@echo "$(GREEN)Historique des migrations...$(NC)"
	docker-compose run --rm web alembic history

setup-dev: ## Configuration complète de l'environnement de développement
	@echo "$(GREEN)Configuration de l'environnement de développement...$(NC)"
	@echo "$(YELLOW)1. Installation des dépendances...$(NC)"
	$(MAKE) install-dev
	@echo "$(YELLOW)2. Démarrage des services Docker...$(NC)"
	$(MAKE) docker-up
	@echo "$(YELLOW)3. Application des migrations...$(NC)"
	$(MAKE) migrate
	@echo "$(YELLOW)4. Lancement des tests...$(NC)"
	$(MAKE) test
	@echo "$(GREEN)✅ Environnement de développement configuré!$(NC)"
	@echo "$(GREEN)🚀 Pour démarrer l'API: make run-dev$(NC)"

run-dev: ## Démarrer l'API en mode développement
	@echo "$(GREEN)Démarrage de l'API en mode développement...$(NC)"
	$(UVICORN) $(APP_MODULE) --reload --host 0.0.0.0 --port 8000

run-prod: ## Démarrer l'API en mode production
	@echo "$(GREEN)Démarrage de l'API en mode production...$(NC)"
	$(UVICORN) $(APP_MODULE) --host 0.0.0.0 --port 8000

docs: ## Générer la documentation
	@echo "$(GREEN)Génération de la documentation...$(NC)"
	@echo "$(GREEN)📖 Documentation disponible sur: http://localhost:8000/docs$(NC)"
	@echo "$(GREEN)📚 ReDoc disponible sur: http://localhost:8000/redoc$(NC)"

check-env: ## Vérifier que l'environnement virtuel est activé
	@if [ -z "$$VIRTUAL_ENV" ]; then \
		echo "$(RED)❌ Environnement virtuel non activé!$(NC)"; \
		echo "$(YELLOW)Activez-le avec: source $(VENV_PATH)$(NC)"; \
		exit 1; \
	fi
	@echo "$(GREEN)✅ Environnement virtuel activé: $$VIRTUAL_ENV$(NC)"

# Commandes avec vérification de l'environnement virtuel
test-safe: check-env test
test-cleanup-safe: check-env test-cleanup
test-coverage-safe: check-env test-coverage
run-dev-safe: check-env run-dev
run-prod-safe: check-env run-prod 