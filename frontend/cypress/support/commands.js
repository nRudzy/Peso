// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command to login
Cypress.Commands.add('login', (email = 'test@example.com', password = 'password123') => {
  cy.visit('/login')
  cy.get('[data-testid="email-input"]').type(email)
  cy.get('[data-testid="password-input"]').type(password)
  cy.get('[data-testid="login-button"]').click()
  cy.url().should('include', '/dashboard')
})

// Custom command to add weight entry
Cypress.Commands.add('addWeightEntry', (weight = 70.5, date = null, comment = 'Test entry') => {
  cy.get('[data-testid="weight-input"]').type(weight)
  
  if (date) {
    cy.get('[data-testid="date-input"]').clear().type(date)
  }
  
  if (comment) {
    cy.get('[data-testid="comment-input"]').type(comment)
  }
  
  cy.get('[data-testid="submit-button"]').click()
  cy.get('[data-testid="success-message"]').should('be.visible')
})

// Custom command to check if element exists
Cypress.Commands.add('shouldExist', (selector) => {
  cy.get(selector).should('exist')
})

// Custom command to check if element is visible
Cypress.Commands.add('shouldBeVisible', (selector) => {
  cy.get(selector).should('be.visible')
})

// Custom command to wait for loading to complete
Cypress.Commands.add('waitForLoading', () => {
  cy.get('[data-testid="loading-spinner"]', { timeout: 10000 }).should('not.exist')
})

// Custom command to select period filter
Cypress.Commands.add('selectPeriod', (period) => {
  cy.get('[data-testid="period-select"]').select(period)
})

// Custom command to check weight statistics
Cypress.Commands.add('checkWeightStats', (expectedStats) => {
  if (expectedStats.currentWeight) {
    cy.get('[data-testid="current-weight"]').should('contain', expectedStats.currentWeight)
  }
  if (expectedStats.averageWeight) {
    cy.get('[data-testid="average-weight"]').should('contain', expectedStats.averageWeight)
  }
  if (expectedStats.totalEntries) {
    cy.get('[data-testid="total-entries"]').should('contain', expectedStats.totalEntries)
  }
})

// Custom command to check BMI information
Cypress.Commands.add('checkBMIInfo', (expectedBMI) => {
  if (expectedBMI.value) {
    cy.get('[data-testid="bmi-value"]').should('contain', expectedBMI.value)
  }
  if (expectedBMI.category) {
    cy.get('[data-testid="bmi-category"]').should('contain', expectedBMI.category)
  }
})

// Custom command to delete weight entry
Cypress.Commands.add('deleteWeightEntry', (entryIndex = 0) => {
  cy.get('[data-testid="delete-entry-button"]').eq(entryIndex).click()
  cy.get('[data-testid="confirm-delete-button"]').click()
  cy.get('[data-testid="success-message"]').should('be.visible')
})

// Custom command to edit weight entry
Cypress.Commands.add('editWeightEntry', (entryIndex = 0, newWeight = 71.0) => {
  cy.get('[data-testid="edit-entry-button"]').eq(entryIndex).click()
  cy.get('[data-testid="weight-input"]').clear().type(newWeight)
  cy.get('[data-testid="submit-button"]').click()
  cy.get('[data-testid="success-message"]').should('be.visible')
})
