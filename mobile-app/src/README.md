# Mobile App Source Code

Ce dossier contient le code source de l'application mobile Peso.

## Structure Recommandée

### React Native
```
src/
├── App.js                # Point d'entrée de l'application
├── navigation/           # Configuration React Navigation
│   ├── index.js
│   ├── AppNavigator.js
│   └── AuthNavigator.js
├── screens/              # Écrans de l'application
│   ├── auth/
│   │   ├── LoginScreen.js
│   │   └── RegisterScreen.js
│   ├── dashboard/
│   │   ├── DashboardScreen.js
│   │   └── WeightChartScreen.js
│   └── profile/
│       └── ProfileScreen.js
├── components/           # Composants réutilisables
│   ├── common/
│   │   ├── Header.js
│   │   ├── Button.js
│   │   └── Loading.js
│   └── forms/
│       ├── WeightForm.js
│       └── GoalForm.js
├── services/             # Services API
│   ├── api.js
│   ├── auth.js
│   └── weights.js
├── store/                # State management (Redux/Zustand)
│   ├── index.js
│   ├── slices/
│   │   ├── authSlice.js
│   │   └── weightsSlice.js
│   └── types.js
├── utils/                # Utilitaires
│   ├── constants.js
│   ├── helpers.js
│   └── storage.js
└── assets/               # Assets (images, fonts, etc.)
    ├── images/
    └── fonts/
```

### Ionic
```
src/
├── app/                  # Configuration de l'app
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app.routes.ts
├── pages/                # Pages de l'application
│   ├── auth/
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/
│   └── profile/
├── components/           # Composants réutilisables
├── services/             # Services API
├── utils/                # Utilitaires
└── assets/               # Assets
```

## Technologies

### React Native
- React Native
- Expo
- React Navigation
- Redux Toolkit ou Zustand
- AsyncStorage
- Axios

### Ionic
- Ionic Framework
- Angular ou React
- Capacitor
- Ionic Storage
- HTTP Client

## Conventions

- Organiser par fonctionnalité
- Utiliser des noms de fichiers descriptifs
- Séparer la logique métier des composants
- Gérer l'état global avec un store
- Utiliser TypeScript si possible
