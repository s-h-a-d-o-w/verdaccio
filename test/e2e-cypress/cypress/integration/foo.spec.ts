describe('dummy', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4873');
  });

  it('1', () => {
    cy.title().should('match', /Verdaccio/);
    cy.get('button[data-testid="header--button-login"]').click();
    cy.get('#login--dialog').should('exist');

    cy.get('button[data-testid="close-login-dialog-button"]').click();
    cy.get('#login--dialog').should('not.exist');
  });

  it('2', () => {
    cy.title().should('match', /Verdaccio/);
    cy.get('button[data-testid="header--button-login"]').click();
    cy.get('#login--dialog').should('exist');

    cy.get('button[data-testid="close-login-dialog-button"]').click();
    cy.get('#login--dialog').should('not.exist');
  });

  it('3', () => {
    cy.title().should('match', /Verdaccio/);
    cy.get('button[data-testid="header--button-login"]').click();
    cy.get('#login--dialog').should('exist');

    cy.get('button[data-testid="close-login-dialog-button"]').click();
    cy.get('#login--dialog').should('not.exist');
  });

  it('4', () => {
    cy.title().should('match', /Verdaccio/);
    cy.get('button[data-testid="header--button-login"]').click();
    cy.get('#login--dialog').should('exist');

    cy.get('button[data-testid="close-login-dialog-button"]').click();
    cy.get('#login--dialog').should('not.exist');
  });

  it('5', () => {
    cy.title().should('match', /Verdaccio/);
    cy.get('button[data-testid="header--button-login"]').click();
    cy.get('#login--dialog').should('exist');

    cy.get('button[data-testid="close-login-dialog-button"]').click();
    cy.get('#login--dialog').should('not.exist');
  });

  it('6', () => {
    cy.title().should('match', /Verdaccio/);
    cy.get('button[data-testid="header--button-login"]').click();
    cy.get('#login--dialog').should('exist');

    cy.get('button[data-testid="close-login-dialog-button"]').click();
    cy.get('#login--dialog').should('not.exist');
  });

  it('7', () => {
    cy.title().should('match', /Verdaccio/);
    cy.get('button[data-testid="header--button-login"]').click();
    cy.get('#login--dialog').should('exist');

    cy.get('button[data-testid="close-login-dialog-button"]').click();
    cy.get('#login--dialog').should('not.exist');
  });

  it('8', () => {
    cy.title().should('match', /Verdaccio/);
    cy.get('button[data-testid="header--button-login"]').click();
    cy.get('#login--dialog').should('exist');

    cy.get('button[data-testid="close-login-dialog-button"]').click();
    cy.get('#login--dialog').should('not.exist');
  });

  it('9', () => {
    cy.title().should('match', /Verdaccio/);
    cy.get('button[data-testid="header--button-login"]').click();
    cy.get('#login--dialog').should('exist');

    cy.get('button[data-testid="close-login-dialog-button"]').click();
    cy.get('#login--dialog').should('not.exist');
  });

  it('10', () => {
    cy.title().should('match', /Verdaccio/);
    cy.get('button[data-testid="header--button-login"]').click();
    cy.get('#login--dialog').should('exist');

    cy.get('button[data-testid="close-login-dialog-button"]').click();
    cy.get('#login--dialog').should('not.exist');
  });
});
