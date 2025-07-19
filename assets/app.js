import './styles/app.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Import des composants Vue
import WeightProgressChart from './components/dashboard/WeightProgressChart.vue';
import LoginForm from './components/auth/LoginForm.vue';
import RegisterForm from './components/auth/RegisterForm.vue';
import JournalEntryForm from './components/journal/JournalEntryForm.vue';
import FriendList from './components/social/FriendList.vue';
import Feed from './components/social/Feed.vue';
import ActivityCard from './components/social/ActivityCard.vue';

// Montage conditionnel des composants Vue
const mountVueComponent = (componentName, component, selector) => {
  const element = document.querySelector(selector);
  if (element) {
    console.log(`Montage du composant ${componentName} sur ${selector}`);
    const app = createApp({});
    const pinia = createPinia();
    app.use(pinia);
    
    app.component(componentName, component);
    app.mount(element);
  } else {
    console.log(`Élément ${selector} non trouvé pour le composant ${componentName}`);
  }
};

// Montage des composants selon les pages
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM chargé, montage des composants Vue...');
  
  // Dashboard components
  mountVueComponent('weight-progress-chart', WeightProgressChart, '#weight-progress-chart');
  
  // Auth components
  mountVueComponent('login-form', LoginForm, '#login-form');
  mountVueComponent('register-form', RegisterForm, '#register-form');
  
  // Journal components
  mountVueComponent('journal-entry-form', JournalEntryForm, '#journal-entry-form');
  
  // Social components
  mountVueComponent('friend-list', FriendList, '#friend-list');
  mountVueComponent('feed', Feed, '#feed');
  mountVueComponent('activity-card', ActivityCard, '#activity-card');
  
  console.log('Montage des composants terminé');
}); 