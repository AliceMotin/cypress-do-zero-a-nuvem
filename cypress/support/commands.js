Cypress.Commands.add(
  "fillMandatoryFieldsAndSubmit",
  (
    data = {
      firstName: "Alice",
      lastName: "Motin",
      email: "alice@gmail.com",
      text: "Curso muito bom, gostei!",
    }
  ) => {
    cy.get('input[name="firstName"]').type(data.firstName);
    cy.get('input[name="lastName"]').type(data.lastName);
    cy.get('input[id="email"]').type(data.email);
    cy.get('textarea[name="open-text-area"]').type(data.text);
    cy.get('button[type="submit"]').click();
  }
);
