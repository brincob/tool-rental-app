describe('Tool Rental Agreement E2E Test', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit('/');
  });

  it('should display tool selection', () => {
    // Check if the tool selection is displayed
    cy.contains('Select a Tool').should('exist');
  });

  it('should allow the user to select a tool and proceed to checkout', () => {
    // Select the first tool
    cy.contains('Werner ladder - LADW').click();

    // Verify checkout form appears
    cy.contains('Checkout Form').should('exist');
  });

  it('should allow the user to fill out the checkout form and generate a rental agreement', () => {
    // Select a tool
    cy.contains('Werner ladder - LADW').click();

    // Fill out checkout form
    cy.get('input[type="date"]').first().type('2024-10-23'); // Checkout date
    cy.get('input[type="date"]').last().type('2024-10-25'); // Return date
    cy.get('input[type="number"]').clear().type('10'); // Discount percent

    // Submit form
    cy.contains('Checkout').click();

    // Check if rental agreement is displayed
    cy.contains('Rental Agreement').should('exist');
    cy.contains('Tool Code: LADW').should('exist');
    cy.contains('Chargeable Days:').should('exist');
    cy.contains('Pre-Discount Amount:').should('exist');
    cy.contains('Discount Amount:').should('exist');
    cy.contains('Final Amount:').should('exist');
  });

  it('should handle invalid input gracefully', () => {
    // Select a tool
    cy.contains('Werner ladder - LADW').click();

    // Attempt to submit without entering dates
    cy.contains('Checkout').click();

    // Verify error message
    cy.contains('Checkout date must be before return date').should('exist');
  });
});
