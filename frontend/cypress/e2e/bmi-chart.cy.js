describe('BMI Chart', () => {
  beforeEach(() => {
    // Login before each test
    cy.visit('/login')
    cy.get('[data-testid="email-input"]').type('test@example.com')
    cy.get('[data-testid="password-input"]').type('password123')
    cy.get('[data-testid="login-button"]').click()
    
    // Wait for login to complete and redirect
    cy.url().should('include', '/')
  })

  it('should load BMI chart when user has height configured', () => {
    // Check that BMI chart container is visible
    cy.get('[data-testid="bmi-chart"]').should('be.visible')
    
    // Check that chart controls are present
    cy.get('[data-testid="bmi-chart-period-select"]').should('be.visible')
    
    // Check that BMI statistics are displayed
    cy.get('[data-testid="bmi-value"]').should('be.visible')
    cy.get('[data-testid="bmi-category"]').should('be.visible')
  })

  it('should show error message when user height is not configured', () => {
    // Intercept the user profile API call to simulate no height
    cy.intercept('GET', '/api/v1/users/me', {
      statusCode: 200,
      body: {
        id: 1,
        email: 'test@example.com',
        first_name: 'Test',
        last_name: 'User',
        height: null,
        height_unit: 'cm',
        weight_unit: 'kg',
        initial_weight: 80,
        target_weight: 70,
        email_verified: true
      }
    }).as('getUserProfile')
    
    // Reload the page to trigger the API call
    cy.reload()
    cy.wait('@getUserProfile')
    
    // Should show message about configuring height
    cy.contains('Veuillez configurer votre taille dans votre profil').should('be.visible')
  })

  it('should update chart when period is changed', () => {
    // Intercept the weight progress API call
    cy.intercept('GET', '/api/v1/weight-entries/progress/*', {
      statusCode: 200,
      body: {
        entries: [
          {
            id: 1,
            weight: 80,
            date: '2024-01-01',
            comment: 'Test entry'
          },
          {
            id: 2,
            weight: 79.5,
            date: '2024-01-02',
            comment: 'Test entry 2'
          }
        ]
      }
    }).as('getWeightProgress')
    
    // Change the period
    cy.get('[data-testid="bmi-chart-period-select"]').select('7')
    
    // Should make API call for new period
    cy.wait('@getWeightProgress')
  })

  it('should display BMI statistics correctly', () => {
    // Check that BMI value is displayed
    cy.get('[data-testid="bmi-value"]').should('not.be.empty')
    
    // Check that BMI category is displayed
    cy.get('[data-testid="bmi-category"]').should('not.be.empty')
    
    // Check that the category has appropriate styling
    cy.get('[data-testid="bmi-category"]').should('have.class')
  })

  it('should handle API errors gracefully', () => {
    // Intercept the weight progress API call and return error
    cy.intercept('GET', '/api/v1/weight-entries/progress/*', {
      statusCode: 500,
      body: { detail: 'Internal server error' }
    }).as('getWeightProgressError')
    
    // Change period to trigger API call
    cy.get('[data-testid="bmi-chart-period-select"]').select('30')
    
    // Wait for API call
    cy.wait('@getWeightProgressError')
    
    // Should show error message
    cy.contains('Erreur lors du chargement des données IMC').should('be.visible')
  })

  it('should show loading state during data fetch', () => {
    // Intercept the weight progress API call and delay response
    cy.intercept('GET', '/api/v1/weight-entries/progress/*', {
      delay: 1000,
      body: {
        entries: []
      }
    }).as('getWeightProgressDelayed')
    
    // Change period to trigger API call
    cy.get('[data-testid="bmi-chart-period-select"]').select('90')
    
    // Should show loading state
    cy.contains('Chargement des données IMC...').should('be.visible')
    
    // Wait for API call to complete
    cy.wait('@getWeightProgressDelayed')
  })
})
