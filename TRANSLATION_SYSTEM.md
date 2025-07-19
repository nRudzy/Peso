# 🌍 Système de Traduction - API Peso

Ce document décrit le système de traduction multilingue mis en place pour l'API Peso, supportant le français et l'anglais.

## 📋 Configuration

### Locales supportées
- **Français (fr)** - Locale par défaut
- **Anglais (en)** - Locale alternative

### Configuration automatique
Le système détecte automatiquement la langue préférée de l'utilisateur via :
1. Le paramètre `?locale=fr|en` dans l'URL
2. L'en-tête HTTP `Accept-Language`
3. Fallback vers le français par défaut

## 🗂️ Structure des fichiers de traduction

```
translations/
├── messages.fr.yaml        # Messages généraux (français)
├── messages.en.yaml        # Messages généraux (anglais)
├── validators.fr.yaml      # Messages de validation (français)
├── validators.en.yaml      # Messages de validation (anglais)
├── api.fr.yaml            # Messages API spécifiques (français)
└── api.en.yaml            # Messages API spécifiques (anglais)
```

## 🔧 Services créés

### LocaleService
Service principal pour la gestion des traductions :

```php
// Injection dans un contrôleur
public function __construct(
    private LocaleService $localeService
) {}

// Utilisation
$message = $this->localeService->trans('app.name', [], 'messages');
$error = $this->localeService->trans('required_field', ['field' => 'email'], 'validators');
```

### LocaleListener
Event listener qui détecte automatiquement la locale sur chaque requête HTTP.

## 📝 Domaines de traduction

### 1. Domain `messages` - Messages généraux
```yaml
app:
  name: "API Peso"
  description: "API de suivi de perte de poids"

auth:
  login_success: "Connexion réussie"
  registration_success: "Utilisateur créé avec succès"

user:
  profile_updated: "Profil mis à jour avec succès"

weight:
  entry_created: "Entrée de poids créée avec succès"

units:
  kg: "kg"
  lbs: "lbs"
  cm: "cm"
  inch: "pouces"

gender:
  male: "Homme"
  female: "Femme"
  other: "Autre"

fields:
  email: "Email"
  password: "Mot de passe"
  # ... autres champs
```

### 2. Domain `validators` - Messages de validation
```yaml
required_field: "Le champ '{{ field }}' est requis"
invalid_email: "L'adresse email n'est pas valide"
invalid_gender: "Le sexe doit être 'male', 'female' ou 'other'"
invalid_date: "La date n'est pas valide"
# + tous les messages de validation Symfony standard
```

### 3. Domain `api` - Messages spécifiques API
```yaml
endpoints:
  register:
    success: "Utilisateur créé avec succès"
    error:
      invalid_data: "Données invalides"
      
  weight_entries:
    create:
      success: "Entrée de poids créée avec succès"
    update:
      success: "Entrée de poids mise à jour avec succès"

errors:
  authentication:
    required: "Authentification requise"
  validation:
    failed: "Échec de la validation des données"
```

## 🚀 Utilisation dans le code

### Dans les contrôleurs

```php
use App\Service\LocaleService;

#[Route('/api/register', methods: ['POST'])]
public function register(Request $request): JsonResponse
{
    if (!$data) {
        return new JsonResponse([
            'error' => $this->localeService->trans('errors.invalid_json', [], 'messages')
        ], Response::HTTP_BAD_REQUEST);
    }

    // Succès
    return new JsonResponse([
        'message' => $this->localeService->trans('endpoints.register.success', [], 'api')
    ]);
}
```

### Dans les templates Twig

```twig
<title>{{ 'app.name'|trans }}</title>
<h1>{{ 'app.description'|trans }}</h1>
<p>{{ 'gender.male'|trans }} / {{ 'gender.female'|trans }}</p>
```

### Avec paramètres

```php
// PHP
$message = $this->localeService->trans('required_field', ['field' => 'email'], 'validators');

// Twig
{{ 'required_field'|trans({'field': 'email'}, 'validators') }}
```

## 🌐 Test des traductions

### Via curl avec Accept-Language

```bash
# Test en français
curl -H "Accept-Language: fr" http://localhost:8080/api/register

# Test en anglais  
curl -H "Accept-Language: en" http://localhost:8080/api/register

# Test avec paramètre URL
curl http://localhost:8080/api/register?locale=en
```

### Commandes Symfony utiles

```bash
# Afficher toutes les traductions pour une locale
docker-compose exec php php bin/console debug:translation fr

# Vérifier les traductions manquantes
docker-compose exec php php bin/console debug:translation en --only-missing

# Vider le cache après modification
docker-compose exec php php bin/console cache:clear
```

## 🔄 Ajout de nouvelles traductions

1. **Ajouter la clé dans les fichiers de traduction :**

```yaml
# translations/messages.fr.yaml
new_feature:
  success: "Nouvelle fonctionnalité activée"
  
# translations/messages.en.yaml  
new_feature:
  success: "New feature activated"
```

2. **Utiliser dans le code :**

```php
$message = $this->localeService->trans('new_feature.success', [], 'messages');
```

3. **Vider le cache :**

```bash
docker-compose exec php php bin/console cache:clear
```

## 📊 Bonnes pratiques

### Organisation des clés
- Utilisez une hiérarchie logique : `domain.category.action`
- Groupez par fonctionnalité : `auth.*`, `user.*`, `weight.*`
- Séparez par domaine : `messages`, `validators`, `api`

### Nommage
- Clés en anglais : `user.profile_updated`
- Snake_case pour les clés
- Descriptif et explicite

### Paramètres
- Utilisez `{{ variable }}` pour les paramètres dynamiques
- Nommez clairement : `{{ field }}`, `{{ min }}`, `{{ max }}`

## 🛠️ Extension du système

### Ajouter une nouvelle langue

1. **Ajouter la locale dans LocaleService :**
```php
private const SUPPORTED_LOCALES = ['fr', 'en', 'es']; // Ajouter 'es'
```

2. **Créer les fichiers de traduction :**
```
translations/messages.es.yaml
translations/validators.es.yaml  
translations/api.es.yaml
```

3. **Traduire toutes les clés existantes**

### Messages d'erreur API
Tous les contrôleurs utilisent maintenant le système de traduction pour les messages d'erreur et de succès, garantissant une expérience utilisateur cohérente dans la langue préférée.

## 🎯 Résumé des modifications

✅ **Installation et configuration** de symfony/translation  
✅ **Configuration des locales** fr/en avec fallback  
✅ **Création des fichiers de traduction** pour 3 domaines  
✅ **Service LocaleService** pour la gestion centralisée  
✅ **Event Listener** pour la détection automatique  
✅ **Migration des contrôleurs** AuthController et WeightEntryController  
✅ **Templates Twig** avec support des traductions  
✅ **Tests et validation** du système complet

Le système est maintenant opérationnel et prêt pour la production ! 🚀 