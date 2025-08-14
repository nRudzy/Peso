# Frontend Source Code

Ce dossier contient le code source principal de l'application VueJS.

## Structure Recommandée

```
src/
├── main.js               # Point d'entrée de l'application
├── App.vue               # Composant racine
├── router/               # Configuration Vue Router
│   ├── index.js
│   └── routes.js
├── store/                # Store Pinia/Vuex
│   ├── index.js
│   ├── modules/
│   │   ├── auth.js
│   │   └── weights.js
│   └── types.js
├── components/           # Composants réutilisables
│   ├── common/
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   └── Loading.vue
│   └── forms/
│       ├── LoginForm.vue
│       └── WeightForm.vue
├── views/                # Pages/Vues
│   ├── Home.vue
│   ├── Login.vue
│   ├── Dashboard.vue
│   └── Profile.vue
├── services/             # Services API
│   ├── api.js
│   ├── auth.js
│   └── weights.js
├── utils/                # Utilitaires
│   ├── constants.js
│   ├── helpers.js
│   └── validators.js
├── assets/               # Assets (CSS, images, etc.)
│   ├── styles/
│   │   ├── main.css
│   │   └── variables.css
│   └── images/
└── plugins/              # Plugins Vue
    └── axios.js
```

## Technologies

- Vue.js 3 (Composition API)
- Vue Router
- Pinia (state management)
- Axios (HTTP client)
- Tailwind CSS
- Vite (build tool)

## Conventions

- Utiliser la Composition API
- Organiser les composants par fonctionnalité
- Utiliser des noms de fichiers PascalCase pour les composants
- Séparer la logique métier des composants
