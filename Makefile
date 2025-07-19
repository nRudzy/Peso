# Makefile for Peso API - Quality Tools

.PHONY: help install test quality fix ci
.DEFAULT_GOAL := help

# Colors for output
GREEN := \033[32m
YELLOW := \033[33m
RED := \033[31m
RESET := \033[0m

## —— 🎯 Main targets ————————————————————————————————————————————————————————
help: ## Show this help message
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

install: ## Install all dependencies
	@echo "$(GREEN)Installing dependencies...$(RESET)"
	docker-compose exec php composer install
	@echo "$(GREEN)✅ Dependencies installed!$(RESET)"

## —— 🧪 Testing ——————————————————————————————————————————————————————————————
test: ## Run PHPUnit tests
	@echo "$(GREEN)Running PHPUnit tests...$(RESET)"
	docker-compose exec php composer test

test-coverage: ## Run tests with coverage report
	@echo "$(GREEN)Running tests with coverage...$(RESET)"
	docker-compose exec php composer test-coverage
	@echo "$(YELLOW)Coverage report available in var/coverage/index.html$(RESET)"

test-unit: ## Run unit tests only
	@echo "$(GREEN)Running unit tests...$(RESET)"
	docker-compose exec php vendor/bin/phpunit tests/Unit

test-integration: ## Run integration tests only
	@echo "$(GREEN)Running integration tests...$(RESET)"
	docker-compose exec php vendor/bin/phpunit tests/Integration

test-functional: ## Run functional tests only
	@echo "$(GREEN)Running functional tests...$(RESET)"
	docker-compose exec php vendor/bin/phpunit tests/Functional

## —— 🔍 Static Analysis ——————————————————————————————————————————————————————
phpstan: ## Run PHPStan static analysis
	@echo "$(GREEN)Running PHPStan...$(RESET)"
	docker-compose exec php composer phpstan

psalm: ## Run Psalm static analysis
	@echo "$(GREEN)Running Psalm...$(RESET)"
	docker-compose exec php composer psalm

psalm-baseline: ## Generate Psalm baseline
	@echo "$(GREEN)Generating Psalm baseline...$(RESET)"
	docker-compose exec php vendor/bin/psalm --set-baseline=psalm-baseline.xml

## —— 🎨 Code Style ————————————————————————————————————————————————————————————
phpcs: ## Check code style with PHP_CodeSniffer
	@echo "$(GREEN)Checking code style with PHPCS...$(RESET)"
	docker-compose exec php composer phpcs

phpcs-fix: ## Fix code style with PHP_CodeSniffer
	@echo "$(GREEN)Fixing code style with PHPCBF...$(RESET)"
	docker-compose exec php composer phpcs-fix

php-cs-fixer: ## Check code style with PHP-CS-Fixer (dry run)
	@echo "$(GREEN)Checking code style with PHP-CS-Fixer...$(RESET)"
	docker-compose exec php composer php-cs-fixer

php-cs-fixer-fix: ## Fix code style with PHP-CS-Fixer
	@echo "$(GREEN)Fixing code style with PHP-CS-Fixer...$(RESET)"
	docker-compose exec php composer php-cs-fixer-fix

## —— 🏗️ Architecture & Quality ———————————————————————————————————————————————
deptrac: ## Check architecture with Deptrac
	@echo "$(GREEN)Checking architecture with Deptrac...$(RESET)"
	docker-compose exec php composer deptrac

deptrac-baseline: ## Generate Deptrac baseline
	@echo "$(GREEN)Generating Deptrac baseline...$(RESET)"
	docker-compose exec php vendor/bin/deptrac analyse --report-baseline=deptrac-baseline.yaml

phpmd: ## Check code complexity with PHPMD
	@echo "$(GREEN)Checking code complexity with PHPMD...$(RESET)"
	docker-compose exec php composer phpmd

phpinsights: ## Run PHP Insights
	@echo "$(GREEN)Running PHP Insights...$(RESET)"
	docker-compose exec php composer phpinsights

rector: ## Check code modernization with Rector (dry run)
	@echo "$(GREEN)Checking code modernization with Rector...$(RESET)"
	docker-compose exec php composer rector

rector-fix: ## Apply Rector fixes
	@echo "$(GREEN)Applying Rector fixes...$(RESET)"
	docker-compose exec php composer rector-fix

## —— 🦠 Mutation Testing ——————————————————————————————————————————————————————
infection: ## Run mutation testing with Infection
	@echo "$(GREEN)Running mutation testing...$(RESET)"
	docker-compose exec php composer infection

## —— 🚀 Combined targets ——————————————————————————————————————————————————————
quality: ## Run all quality checks
	@echo "$(GREEN)Running all quality checks...$(RESET)"
	docker-compose exec php composer quality

fix: ## Fix all auto-fixable issues
	@echo "$(GREEN)Fixing all auto-fixable issues...$(RESET)"
	docker-compose exec php composer quality-fix

ci: ## Run CI pipeline (tests + quality)
	@echo "$(GREEN)Running CI pipeline...$(RESET)"
	docker-compose exec php composer ci

quality-full: ## Run extended quality checks
	@echo "$(GREEN)Running extended quality checks...$(RESET)"
	@make phpstan
	@make psalm
	@make phpcs
	@make phpmd
	@make deptrac
	@make phpinsights

## —— 🛠️ Development helpers ———————————————————————————————————————————————————
shell: ## Connect to PHP container shell
	@echo "$(GREEN)Connecting to PHP container...$(RESET)"
	docker-compose exec php bash

connect: ## Alias for shell command
	@make shell

setup-qa: ## Initialize quality assurance tools
	@echo "$(GREEN)Setting up QA tools...$(RESET)"
	docker-compose exec php vendor/bin/psalm --init src --level=4
	@make deptrac-baseline

clear-cache: ## Clear all caches
	@echo "$(GREEN)Clearing caches...$(RESET)"
	docker-compose exec php rm -rf var/cache/*
	docker-compose exec php php bin/console cache:clear

composer-validate: ## Validate composer.json
	@echo "$(GREEN)Validating composer.json...$(RESET)"
	docker-compose exec php composer validate --strict

security-check: ## Check for known security vulnerabilities
	@echo "$(GREEN)Checking for security vulnerabilities...$(RESET)"
	docker-compose exec php composer audit

## —— 📊 Reports ————————————————————————————————————————————————————————————————
reports: ## Generate all reports
	@echo "$(GREEN)Generating all reports...$(RESET)"
	@make test-coverage
	@make phpstan > var/reports/phpstan.txt || true
	@make psalm > var/reports/psalm.txt || true
	@make phpmd > var/reports/phpmd.txt || true
	@echo "$(YELLOW)Reports generated in var/reports/$(RESET)"

reports-setup: ## Create reports directory
	@mkdir -p var/reports

## —— 🧹 Cleanup ————————————————————————————————————————————————————————————————
clean: ## Clean up generated files
	@echo "$(GREEN)Cleaning up...$(RESET)"
	docker-compose exec php rm -rf var/coverage var/cache/* var/reports
	@echo "$(GREEN)✅ Cleanup completed!$(RESET)" 