// # Very macOS centric - no scroll bar in the side panel in their docs
// # Odd default configuration (records video)
// # No straightforward documentation for their configuration options
// # Not able to run tests with multiple browser engines at once
// # Watch mode doesn't work: cypress run --config watchForFileChanges=true
// # Weird syntax:
// .should('not.exist')
// # API should mimic user behavior and the user either clicks or uses a keyboard:
// .find('input[type=checkbox]').check()

describe('dummy', () => {
  it('1', () => {
    cy.visit('http://localhost:4873');

    cy.title().should('match', /Verdaccio/);
    cy.get('button[data-testid="header--button-login"]').click();
    cy.get('#login--dialog').should('exist');

    cy.get('button[data-testid="close-login-dialog-button"]').click();
    cy.get('#login--dialog').should('not.exist');
  });
});
