<template>
  <div v-if="show" :class="alertClasses" role="alert">
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <component :is="iconComponent" class="w-5 h-5" />
      </div>
      <div class="ml-3 flex-1">
        <p class="text-sm font-medium">
          <slot />
        </p>
        <p v-if="description" class="mt-1 text-sm opacity-90">
          {{ description }}
        </p>
      </div>
      <div v-if="dismissible" class="ml-auto pl-3">
        <button
          type="button"
          class="inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
          :class="dismissButtonClasses"
          @click="handleDismiss"
        >
          <span class="sr-only">Fermer</span>
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    type: {
      type: String,
      default: 'info',
      validator: (value) => ['info', 'success', 'warning', 'error'].includes(value),
    },
    description: {
      type: String,
      default: '',
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    alertClasses() {
      const baseClasses = 'rounded-lg p-4 border';
      
      const typeClasses = {
        info: 'alert-info',
        success: 'alert-success',
        warning: 'alert-warning',
        error: 'alert-error',
      };
      
      return `${baseClasses} ${typeClasses[this.type]}`;
    },
    
    dismissButtonClasses() {
      const typeClasses = {
        info: 'text-primary-500 hover:text-primary-700 focus:ring-primary-500',
        success: 'text-success-500 hover:text-success-700 focus:ring-success-500',
        warning: 'text-warning-500 hover:text-warning-700 focus:ring-warning-500',
        error: 'text-danger-500 hover:text-danger-700 focus:ring-danger-500',
      };
      
      return typeClasses[this.type];
    },
    
    iconComponent() {
      const icons = {
        info: 'InfoIcon',
        success: 'SuccessIcon',
        warning: 'WarningIcon',
        error: 'ErrorIcon',
      };
      
      return icons[this.type];
    },
  },
  methods: {
    handleDismiss() {
      this.$emit('dismiss');
    },
  },
};

// Composants d'icônes
const InfoIcon = {
  template: `
    <svg fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
    </svg>
  `,
};

const SuccessIcon = {
  template: `
    <svg fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
    </svg>
  `,
};

const WarningIcon = {
  template: `
    <svg fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
  `,
};

const ErrorIcon = {
  template: `
    <svg fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
    </svg>
  `,
};

// Enregistrer les composants d'icônes globalement
if (typeof window !== 'undefined') {
  window.InfoIcon = InfoIcon;
  window.SuccessIcon = SuccessIcon;
  window.WarningIcon = WarningIcon;
  window.ErrorIcon = ErrorIcon;
}
</script> 