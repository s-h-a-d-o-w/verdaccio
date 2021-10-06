// 1 test
// real    0m5,349s

// 100 (!!!) tests
// real    4m22,863s

// # Very macOS centric - no scroll bar in the side panel in their docs
// # Annoyingly opinionated about its default configuration (video on by default)
// # No straightforward documentation for their configuration options
// # Not able to run tests with multiple browser engines at once
// # Watch mode doesn't work: cypress run --config watchForFileChanges=true
// # Weird syntax:
// .should('not.exist')
// .find('input[type=checkbox]').check() < API should mimic user behavior and the user either clicks for use as a keyboard

describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('http://localhost:4873');

    cy.title().should('match', /Verdaccio/);
    cy.get('button[data-testid="header--button-login"]').click();
    cy.get('#login--dialog').should('exist');

    cy.get('button[data-testid="close-login-dialog-button"]').click();
    cy.get('#login--dialog').should('not.exist');
  });
});
