describe('User Scenarios E2E Tests', () => {
  beforeEach(() => {
    // Mock API responses
    cy.intercept('GET', '/api/v1/users/me', {
      statusCode: 200,
      body: {
        id: 1,
        email: 'test@example.com',
        first_name: 'Test',
        last_name: 'User',
        height: 175,
        height_unit: 'cm',
        weight_unit: 'kg',
        initial_weight: 80,
        target_weight: 70,
        email_verified: true
      }
    }).as('getUserProfile')

    cy.intercept('GET', '/api/v1/weight-entries/statistics', {
      statusCode: 200,
      body: {
        total_entries: 3,
        current_weight: 75.5,
        initial_weight: 80,
        min_weight: 74.2,
        max_weight: 80.1,
        average_weight: 76.8,
        goal_progression_percentage: 45.2,
        weight_to_goal: 5.5
      }
    }).as('getWeightStats')

    cy.intercept('GET', '/api/v1/weight-entries/progress/*', {
      statusCode: 200,
      body: {
        total_entries: 3,
        average_weight: 76.8,
        weight_change: -4.5,
        entries: [
          {
            id: 1,
            weight: 75.5,
            date: '2024-01-15T10:00:00Z',
            comment: 'Poids du matin'
          },
          {
            id: 2,
            weight: 76.2,
            date: '2024-01-14T10:00:00Z',
            comment: 'Après le sport'
          },
          {
            id: 3,
            weight: 77.1,
            date: '2024-01-13T10:00:00Z',
            comment: 'Poids du soir'
          }
        ]
      }
    }).as('getWeightProgress')

    cy.intercept('GET', '/api/v1/weight-entries*', {
      statusCode: 200,
      body: {
        data: [
          {
            id: 1,
            weight: 75.5,
            date: '2024-01-15T10:00:00Z',
            comment: 'Poids du matin'
          },
          {
            id: 2,
            weight: 76.2,
            date: '2024-01-14T10:00:00Z',
            comment: 'Après le sport'
          },
          {
            id: 3,
            weight: 77.1,
            date: '2024-01-13T10:00:00Z',
            comment: 'Poids du soir'
          }
        ],
        metadata: {
          total: 3,
          total_pages: 1,
          current_page: 1
        }
      }
    }).as('getWeightEntries')
  })

  describe('Scenario 1: New user first weight entry', () => {
    it('should allow a new user to add their first weight entry', () => {
      // Mock empty statistics for new user
      cy.intercept('GET', '/api/v1/weight-entries/statistics', {
        statusCode: 200,
        body: {
          total_entries: 0,
          current_weight: null,
          initial_weight: null,
          min_weight: null,
          max_weight: null,
          average_weight: null,
          goal_progression_percentage: null,
          weight_to_goal: null
        }
      }).as('getEmptyWeightStats')

      cy.intercept('POST', '/api/v1/weight-entries', {
        statusCode: 201,
        body: {
          id: 1,
          weight: 75.0,
          date: new Date().toISOString(),
          comment: 'Première entrée'
        }
      }).as('createFirstEntry')

      cy.login()
      cy.visit('/dashboard')
      cy.waitForLoading()

      // Add first weight entry
      cy.get('[data-testid="weight-input"]').type('75.0')
      cy.get('[data-testid="comment-input"]').type('Première entrée')
      cy.get('[data-testid="submit-button"]').click()

      cy.wait('@createFirstEntry')
      cy.get('[data-testid="success-message"]').should('be.visible')
      cy.get('[data-testid="success-message"]').should('contain', 'Entrée de poids enregistrée avec succès')
    })
  })

  describe('Scenario 2: Regular user tracking progress', () => {
    it('should allow a regular user to track their weight progress', () => {
      cy.login()
      cy.visit('/dashboard')
      cy.waitForLoading()

      // Check that all components are loaded
      cy.get('[data-testid="weight-chart"]').should('be.visible')
      cy.get('[data-testid="bmi-chart"]').should('be.visible')
      cy.get('[data-testid="weight-statistics"]').should('be.visible')
      cy.get('[data-testid="weight-history"]').should('be.visible')

      // Check that statistics are displayed
      cy.get('[data-testid="current-weight"]').should('contain', '75.5')
      cy.get('[data-testid="average-weight"]').should('contain', '76.8')
      cy.get('[data-testid="total-entries"]').should('contain', '3')

      // Check goal progression
      cy.get('[data-testid="goal-progress-percentage"]').should('contain', '45.2%')
      cy.get('[data-testid="weight-to-goal"]').should('contain', '+5.5 kg')

      // Check motivational message
      cy.get('[data-testid="motivational-message"]').should('be.visible')
    })
  })

  describe('Scenario 3: User filtering data by period', () => {
    it('should allow user to filter weight data by different periods', () => {
      cy.login()
      cy.visit('/dashboard')
      cy.waitForLoading()

      // Test weight chart period filter
      cy.get('[data-testid="weight-chart-period-select"]').select('7')
      cy.wait('@getWeightProgress')

      cy.get('[data-testid="weight-chart-period-select"]').select('90')
      cy.wait('@getWeightProgress')

      // Test BMI chart period filter
      cy.get('[data-testid="bmi-chart-period-select"]').select('30')
      cy.wait('@getWeightProgress')

      // Test history period filter
      cy.get('[data-testid="history-period-select"]').select('30')
      cy.wait('@getWeightEntries')
    })
  })

  describe('Scenario 4: User managing weight entries', () => {
    it('should allow user to edit and delete weight entries', () => {
      cy.intercept('PUT', '/api/v1/weight-entries/1', {
        statusCode: 200,
        body: {
          id: 1,
          weight: 75.2,
          date: '2024-01-15T10:00:00Z',
          comment: 'Poids du matin - corrigé'
        }
      }).as('updateEntry')

      cy.intercept('DELETE', '/api/v1/weight-entries/1', {
        statusCode: 200,
        body: { message: 'Weight entry deleted successfully' }
      }).as('deleteEntry')

      cy.login()
      cy.visit('/dashboard')
      cy.waitForLoading()

      // Edit an entry
      cy.get('[data-testid="edit-entry-button"]').first().click()
      cy.get('[data-testid="weight-input"]').clear().type('75.2')
      cy.get('[data-testid="comment-input"]').clear().type('Poids du matin - corrigé')
      cy.get('[data-testid="submit-button"]').click()

      cy.wait('@updateEntry')
      cy.get('[data-testid="success-message"]').should('be.visible')

      // Delete an entry
      cy.get('[data-testid="delete-entry-button"]').first().click()
      cy.get('[data-testid="confirm-delete-button"]').click()

      cy.wait('@deleteEntry')
      cy.get('[data-testid="success-message"]').should('be.visible')
    })
  })

  describe('Scenario 5: User viewing BMI information', () => {
    it('should display BMI information when user has height configured', () => {
      cy.login()
      cy.visit('/dashboard')
      cy.waitForLoading()

      // Check BMI information is displayed
      cy.get('[data-testid="bmi-value"]').should('be.visible')
      cy.get('[data-testid="bmi-category"]').should('be.visible')

      // Check BMI calculation (75.5 kg / (1.75 m)² = 24.7)
      cy.get('[data-testid="bmi-value"]').should('contain', '24.7')
      cy.get('[data-testid="bmi-category"]').should('contain', 'Normal weight')
    })

    it('should show message when height is not configured', () => {
      // Mock user without height
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
      }).as('getUserProfileNoHeight')

      cy.login()
      cy.visit('/dashboard')
      cy.waitForLoading()

      // Check that BMI chart shows no height message
      cy.get('[data-testid="bmi-chart"]').should('contain', 'Veuillez configurer votre taille')
    })
  })

  describe('Scenario 6: User viewing detailed statistics', () => {
    it('should display comprehensive weight statistics', () => {
      cy.login()
      cy.visit('/dashboard')
      cy.waitForLoading()

      // Check weight range statistics
      cy.get('[data-testid="min-weight"]').should('contain', '74.2 kg')
      cy.get('[data-testid="max-weight"]').should('contain', '80.1 kg')

      // Check current status
      cy.get('[data-testid="current-weight"]').should('contain', '75.5 kg')
      cy.get('[data-testid="initial-weight"]').should('contain', '80 kg')

      // Check goal progression
      cy.get('[data-testid="goal-progress-bar"]').should('be.visible')
      cy.get('[data-testid="goal-progress-percentage"]').should('contain', '45.2%')
    })
  })

  describe('Scenario 7: User viewing weight history', () => {
    it('should display weight history with all entries', () => {
      cy.login()
      cy.visit('/dashboard')
      cy.waitForLoading()

      // Check that history shows all entries
      cy.get('[data-testid="weight-entry"]').should('have.length', 3)

      // Check that entries show correct information
      cy.get('[data-testid="weight-entry"]').first().should('contain', '75.5 kg')
      cy.get('[data-testid="weight-entry"]').first().should('contain', 'Poids du matin')

      // Check pagination
      cy.get('[data-testid="pagination-info"]').should('contain', 'Page 1 sur 1')
    })
  })

  describe('Scenario 8: Mobile responsive design', () => {
    it('should work properly on mobile devices', () => {
      cy.viewport('iphone-x')
      
      cy.login()
      cy.visit('/dashboard')
      cy.waitForLoading()

      // Check that all components are still accessible
      cy.get('[data-testid="weight-entry-form"]').should('be.visible')
      cy.get('[data-testid="weight-chart"]').should('be.visible')
      cy.get('[data-testid="weight-statistics"]').should('be.visible')
      cy.get('[data-testid="weight-history"]').should('be.visible')

      // Check that grid layout adapts to mobile
      cy.get('[data-testid="dashboard-grid"]').should('have.class', 'grid-cols-1')

      // Test adding weight entry on mobile
      cy.get('[data-testid="weight-input"]').type('76.0')
      cy.get('[data-testid="comment-input"]').type('Test mobile')
      cy.get('[data-testid="submit-button"]').click()
    })
  })

  describe('Scenario 9: Error handling', () => {
    it('should handle API errors gracefully', () => {
      cy.intercept('GET', '/api/v1/weight-entries/statistics', {
        statusCode: 500,
        body: { detail: 'Internal server error' }
      }).as('getWeightStatsError')

      cy.login()
      cy.visit('/dashboard')
      cy.wait('@getWeightStatsError')

      // Check that error message is displayed
      cy.get('[data-testid="error-message"]').should('be.visible')
      cy.get('[data-testid="error-message"]').should('contain', 'Erreur')
    })

    it('should handle network errors gracefully', () => {
      cy.intercept('GET', '/api/v1/weight-entries/statistics', {
        forceNetworkError: true
      }).as('getWeightStatsNetworkError')

      cy.login()
      cy.visit('/dashboard')
      cy.wait('@getWeightStatsNetworkError')

      // Check that error message is displayed
      cy.get('[data-testid="error-message"]').should('be.visible')
    })
  })

  describe('Scenario 10: Performance and loading states', () => {
    it('should show loading states while fetching data', () => {
      // Delay API response to test loading state
      cy.intercept('GET', '/api/v1/weight-entries/statistics', (req) => {
        req.reply({
          statusCode: 200,
          body: {
            total_entries: 3,
            current_weight: 75.5,
            initial_weight: 80,
            min_weight: 74.2,
            max_weight: 80.1,
            average_weight: 76.8,
            goal_progression_percentage: 45.2,
            weight_to_goal: 5.5
          },
          delay: 1000
        })
      }).as('getWeightStatsDelayed')

      cy.login()
      cy.visit('/dashboard')

      // Check that loading spinner is shown
      cy.get('[data-testid="loading-spinner"]').should('be.visible')

      // Wait for data to load
      cy.wait('@getWeightStatsDelayed')
      cy.get('[data-testid="loading-spinner"]').should('not.exist')
    })
  })
})
