describe('Profile Edit Page', () => {
  beforeEach(() => {
    // Login before each test
    cy.visit('/login')
    cy.get('[data-testid="email-input"]').type('test@example.com')
    cy.get('[data-testid="password-input"]').type('password123')
    cy.get('[data-testid="login-button"]').click()
    
    // Wait for login to complete and redirect
    cy.url().should('include', '/')
    
    // Navigate to profile edit page
    cy.visit('/profile/edit')
  })

  it('should load profile edit page', () => {
    cy.get('[data-testid="profile-edit-form"]').should('be.visible')
    cy.contains('Modifier le Profil').should('be.visible')
  })

  it('should display current user information in form fields', () => {
    // Check that form fields are populated with current user data
    cy.get('[data-testid="first-name-input"]').should('have.value')
    cy.get('[data-testid="last-name-input"]').should('have.value')
    cy.get('[data-testid="email-input"]').should('have.value')
    cy.get('[data-testid="height-input"]').should('have.value')
    cy.get('[data-testid="initial-weight-input"]').should('have.value')
    cy.get('[data-testid="target-weight-input"]').should('have.value')
  })

  it('should validate required fields', () => {
    // Clear required fields
    cy.get('[data-testid="first-name-input"]').clear()
    cy.get('[data-testid="last-name-input"]').clear()
    cy.get('[data-testid="email-input"]').clear()
    cy.get('[data-testid="height-input"]').clear()
    cy.get('[data-testid="initial-weight-input"]').clear()
    cy.get('[data-testid="target-weight-input"]').clear()
    
    // Try to save
    cy.get('[data-testid="save-button"]').click()
    
    // Check for validation errors
    cy.contains('Le prénom est requis').should('be.visible')
    cy.contains('Le nom est requis').should('be.visible')
    cy.contains('L\'email est requis').should('be.visible')
    cy.contains('La taille doit être supérieure à 0').should('be.visible')
    cy.contains('Le poids initial doit être supérieur à 0').should('be.visible')
    cy.contains('Le poids objectif doit être supérieure à 0').should('be.visible')
  })

  it('should validate email format', () => {
    cy.get('[data-testid="email-input"]').clear().type('invalid-email')
    cy.get('[data-testid="save-button"]').click()
    cy.contains('Format d\'email invalide').should('be.visible')
  })

  it('should allow editing user information', () => {
    // Update form fields
    cy.get('[data-testid="first-name-input"]').clear().type('John')
    cy.get('[data-testid="last-name-input"]').clear().type('Doe')
    cy.get('[data-testid="height-input"]').clear().type('175')
    cy.get('[data-testid="initial-weight-input"]').clear().type('80')
    cy.get('[data-testid="target-weight-input"]').clear().type('70')
    
    // Change units
    cy.get('[data-testid="height-unit-select"]').select('cm')
    cy.get('[data-testid="weight-unit-select"]').select('kg')
    
    // Save changes
    cy.get('[data-testid="save-button"]').click()
    
    // Should show success message and redirect
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Profil mis à jour avec succès!')
    })
  })

  it('should allow canceling changes', () => {
    // Make some changes
    cy.get('[data-testid="first-name-input"]').clear().type('Test')
    
    // Cancel
    cy.get('[data-testid="cancel-button"]').click()
    
    // Should go back to previous page
    cy.url().should('not.include', '/profile/edit')
  })

  it('should handle API errors gracefully', () => {
    // Intercept API call and return error
    cy.intercept('PUT', '/api/v1/users/me', {
      statusCode: 500,
      body: { detail: 'Internal server error' }
    }).as('updateProfile')
    
    // Try to save
    cy.get('[data-testid="save-button"]').click()
    
    // Wait for API call
    cy.wait('@updateProfile')
    
    // Should show error message
    cy.contains('Erreur lors de la mise à jour du profil').should('be.visible')
  })

  it('should show loading state during save', () => {
    // Intercept API call and delay response
    cy.intercept('PUT', '/api/v1/users/me', {
      delay: 1000,
      body: { message: 'Profile updated' }
    }).as('updateProfile')
    
    // Try to save
    cy.get('[data-testid="save-button"]').click()
    
    // Should show loading state
    cy.get('[data-testid="save-button"]').should('contain', 'Enregistrement...')
    cy.get('[data-testid="save-button"]').should('be.disabled')
  })
})
