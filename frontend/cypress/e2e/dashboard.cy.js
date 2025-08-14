describe('Dashboard E2E Tests', () => {
  beforeEach(() => {
    // Mock API responses for testing
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
        total_entries: 5,
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
        total_entries: 5,
        average_weight: 76.8,
        weight_change: -4.5,
        entries: [
          {
            id: 1,
            weight: 75.5,
            date: '2024-01-15T10:00:00Z',
            comment: 'Test entry 1'
          },
          {
            id: 2,
            weight: 76.2,
            date: '2024-01-14T10:00:00Z',
            comment: 'Test entry 2'
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
            comment: 'Test entry 1'
          },
          {
            id: 2,
            weight: 76.2,
            date: '2024-01-14T10:00:00Z',
            comment: 'Test entry 2'
          }
        ],
        metadata: {
          total: 2,
          total_pages: 1,
          current_page: 1
        }
      }
    }).as('getWeightEntries')

    // Login and visit dashboard
    cy.login()
    cy.visit('/dashboard')
    cy.waitForLoading()
  })

  it('should display all dashboard components', () => {
    // Check main sections
    cy.get('[data-testid="weight-entry-form"]').should('be.visible')
    cy.get('[data-testid="weight-chart"]').should('be.visible')
    cy.get('[data-testid="bmi-chart"]').should('be.visible')
    cy.get('[data-testid="weight-statistics"]').should('be.visible')
    cy.get('[data-testid="user-profile"]').should('be.visible')
    cy.get('[data-testid="quick-stats"]').should('be.visible')
    cy.get('[data-testid="weight-history"]').should('be.visible')
  })

  it('should display user profile information correctly', () => {
    cy.get('[data-testid="user-name"]').should('contain', 'Test User')
    cy.get('[data-testid="user-height"]').should('contain', '175 cm')
    cy.get('[data-testid="initial-weight"]').should('contain', '80 kg')
    cy.get('[data-testid="target-weight"]').should('contain', '70 kg')
    cy.get('[data-testid="email-status"]').should('contain', 'Vérifié')
  })

  it('should display weight statistics correctly', () => {
    cy.get('[data-testid="total-entries"]').should('contain', '5')
    cy.get('[data-testid="current-weight"]').should('contain', '75.5 kg')
    cy.get('[data-testid="average-weight"]').should('contain', '76.8 kg')
    cy.get('[data-testid="min-weight"]').should('contain', '74.2 kg')
    cy.get('[data-testid="max-weight"]').should('contain', '80.1 kg')
  })

  it('should display goal progression correctly', () => {
    cy.get('[data-testid="goal-progress-bar"]').should('be.visible')
    cy.get('[data-testid="goal-progress-percentage"]').should('contain', '45.2%')
    cy.get('[data-testid="weight-to-goal"]').should('contain', '+5.5 kg')
  })

  it('should display motivational message', () => {
    cy.get('[data-testid="motivational-message"]').should('be.visible')
    cy.get('[data-testid="motivational-message"]').should('contain', 'Bien commencé')
  })

  it('should allow adding new weight entry', () => {
    const testWeight = 74.8
    const testComment = 'Test weight entry'

    cy.intercept('POST', '/api/v1/weight-entries', {
      statusCode: 201,
      body: {
        id: 6,
        weight: testWeight,
        date: new Date().toISOString(),
        comment: testComment
      }
    }).as('createWeightEntry')

    cy.get('[data-testid="weight-input"]').type(testWeight)
    cy.get('[data-testid="comment-input"]').type(testComment)
    cy.get('[data-testid="submit-button"]').click()

    cy.wait('@createWeightEntry')
    cy.get('[data-testid="success-message"]').should('be.visible')
  })

  it('should display BMI information when height is available', () => {
    cy.get('[data-testid="bmi-value"]').should('be.visible')
    cy.get('[data-testid="bmi-category"]').should('be.visible')
    
    // Check BMI calculation (75.5 kg / (1.75 m)² = 24.7)
    cy.get('[data-testid="bmi-value"]').should('contain', '24.7')
    cy.get('[data-testid="bmi-category"]').should('contain', 'Normal weight')
  })

  it('should allow filtering weight history by period', () => {
    cy.get('[data-testid="history-period-select"]').select('30')
    cy.wait('@getWeightEntries')
    
    cy.get('[data-testid="weight-entry"]').should('have.length', 2)
  })

  it('should display weight history with pagination', () => {
    cy.get('[data-testid="weight-entry"]').should('have.length', 2)
    cy.get('[data-testid="pagination-info"]').should('contain', 'Page 1 sur 1')
  })

      it('should allow editing weight entry', () => {
      const newWeight = 75.0

      cy.intercept('PUT', '/api/v1/weight-entries/1', {
        statusCode: 200,
        body: {
          id: 1,
          weight: newWeight,
          date: '2024-01-15T10:00:00Z',
          comment: 'Test entry 1'
        }
      }).as('updateWeightEntry')

      cy.get('[data-testid="edit-entry-button"]').first().click()
      
      // Check that modal is visible
      cy.get('[data-testid="edit-weight-input"]').should('be.visible')
      cy.get('[data-testid="edit-weight-input"]').clear().type(newWeight)
      cy.get('[data-testid="edit-submit-button"]').click()

      cy.wait('@updateWeightEntry')
      cy.get('[data-testid="edit-success-message"]').should('be.visible')
    })

  it('should allow deleting weight entry', () => {
    cy.intercept('DELETE', '/api/v1/weight-entries/1', {
      statusCode: 200,
      body: { message: 'Weight entry deleted successfully' }
    }).as('deleteWeightEntry')

    cy.get('[data-testid="delete-entry-button"]').first().click()
    cy.get('[data-testid="confirm-delete-button"]').click()

    cy.wait('@deleteWeightEntry')
    cy.get('[data-testid="success-message"]').should('be.visible')
  })

  it('should update charts when period filter changes', () => {
    cy.get('[data-testid="weight-chart-period-select"]').select('90')
    cy.wait('@getWeightProgress')
    
    cy.get('[data-testid="bmi-chart-period-select"]').select('90')
    cy.wait('@getWeightProgress')
    
    // Charts should be updated
    cy.get('[data-testid="weight-chart"]').should('be.visible')
    cy.get('[data-testid="bmi-chart"]').should('be.visible')
  })

  it('should handle API errors gracefully', () => {
    cy.intercept('GET', '/api/v1/weight-entries/statistics', {
      statusCode: 500,
      body: { detail: 'Internal server error' }
    }).as('getWeightStatsError')

    cy.reload()
    cy.wait('@getWeightStatsError')
    
    cy.get('[data-testid="error-message"]').should('be.visible')
  })

  it('should be responsive on mobile devices', () => {
    cy.viewport('iphone-x')
    
    // Check that components are still visible and functional
    cy.get('[data-testid="weight-entry-form"]').should('be.visible')
    cy.get('[data-testid="weight-chart"]').should('be.visible')
    cy.get('[data-testid="weight-statistics"]').should('be.visible')
    
    // Check that grid layout adapts
    cy.get('[data-testid="dashboard-grid"]').should('have.class', 'grid-cols-1')
  })
})
