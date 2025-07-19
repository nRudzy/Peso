/**
 * Fonctions utilitaires JavaScript
 */

// Formatage des dates
export const formatDate = (date, format = 'YYYY-MM-DD') => {
  if (!date) return '';
  
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day);
};

// Formatage des nombres (poids, etc.)
export const formatNumber = (number, decimals = 1) => {
  if (number === null || number === undefined) return '';
  return Number(number).toFixed(decimals);
};

// Validation des emails
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validation des mots de passe
export const validatePassword = (password) => {
  const minLength = 6;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  
  return {
    isValid: password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers,
    errors: {
      length: password.length < minLength ? `Au moins ${minLength} caractères` : null,
      uppercase: !hasUpperCase ? 'Au moins une majuscule' : null,
      lowercase: !hasLowerCase ? 'Au moins une minuscule' : null,
      numbers: !hasNumbers ? 'Au moins un chiffre' : null,
    }
  };
};

// Calcul du BMI
export const calculateBMI = (weight, height, weightUnit = 'kg', heightUnit = 'cm') => {
  if (!weight || !height) return null;
  
  let weightKg = weight;
  let heightM = height / 100;
  
  if (weightUnit === 'lbs') {
    weightKg = weight * 0.453592;
  }
  
  if (heightUnit === 'inch') {
    heightM = height * 0.0254;
  }
  
  return weightKg / (heightM * heightM);
};

// Catégorisation du BMI
export const getBMICategory = (bmi) => {
  if (!bmi) return null;
  
  if (bmi < 18.5) return 'underweight';
  if (bmi < 25) return 'normal';
  if (bmi < 30) return 'overweight';
  return 'obese';
};

// Gestion du stockage local
export const storage = {
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Erreur lors du stockage:', error);
    }
  },
  
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Erreur lors de la récupération:', error);
      return defaultValue;
    }
  },
  
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  },
  
  clear: () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Erreur lors du nettoyage:', error);
    }
  }
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Export global pour utilisation dans les composants Vue
window.helpers = {
  formatDate,
  formatNumber,
  isValidEmail,
  validatePassword,
  calculateBMI,
  getBMICategory,
  storage,
  debounce,
  throttle,
}; 