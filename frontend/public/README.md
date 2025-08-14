# Frontend Public Assets

Ce dossier contient les fichiers statiques publics de l'application VueJS.

## Structure

```
public/
├── index.html            # Page HTML principale
├── favicon.ico           # Icône du site
├── robots.txt            # Configuration pour les robots
├── manifest.json         # Manifeste PWA
├── images/               # Images statiques
│   ├── logo.png
│   ├── icons/
│   └── backgrounds/
└── fonts/                # Polices personnalisées
    └── custom-font.woff2
```

## Fichiers Importants

### index.html
- Point d'entrée de l'application Vue
- Contient les meta tags SEO
- Configuration des polices et CSS globaux

### favicon.ico
- Icône affichée dans l'onglet du navigateur
- Formats recommandés : .ico, .png, .svg

### robots.txt
- Instructions pour les moteurs de recherche
- Contrôle l'indexation du site

### manifest.json
- Configuration pour PWA (Progressive Web App)
- Définit l'icône, le nom, les couleurs

## Bonnes Pratiques

- Optimiser les images (compression, formats modernes)
- Utiliser des noms de fichiers descriptifs
- Organiser les assets par type
- Vérifier que les fichiers sont bien servis en production
