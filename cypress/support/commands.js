Cypress.Commands.add("fillMandatoryFieldsAndSubmit", () => {
  cy.get('input[name="firstName"]').type("Alice");
  cy.get('input[name="lastName"]').type("Motin");
  cy.get('input[id="email"]').type("alice@gmail.com");
  cy.get('textarea[name="open-text-area"]').type("Curso muito bom, gostei!");
  cy.get('button[type="submit"]').click();
});
