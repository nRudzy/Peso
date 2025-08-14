# Application Mobile - Peso SaaS

Ce dossier contient l'application mobile de Peso, développée avec React Native ou Ionic.

## Structure

- `src/` - Code source de l'application mobile
- `README.md` - Notes spécifiques au développement mobile

## Technologies

- React Native ou Ionic
- Expo (si React Native)
- Capacitor (si Ionic)
- React Navigation
- AsyncStorage
- Axios

## Développement

### React Native
```bash
# Installer les dépendances
npm install

# Lancer l'application
npx expo start

# Build pour Android
npx expo build:android

# Build pour iOS
npx expo build:ios
```

### Ionic
```bash
# Installer les dépendances
npm install

# Lancer l'application
ionic serve

# Build pour mobile
ionic capacitor build android
ionic capacitor build ios
```
