describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });
  it("verifica o título da aplicação", () => {
    cy.title().should("eq", "Central de Atendimento ao Cliente TAT");
  });
  it("exercício - preenche os campos obrigatórios e envia o formulário", () => {
    cy.get('input[name="firstName"]').type("Alice");
    cy.get('input[name="lastName"]').type("Motin");
    cy.get('input[id="email"]').type("alice@gmail.com");
    cy.get('textarea[name="open-text-area"]').type("Curso muito bom, gostei!");
    cy.get('button[type="submit"]').click();
    cy.get('span[class="success"]').should(
      "be.visible",
      "Mensagem enviada com sucesso."
    );
  });
  it("exercício extra 1 - delay 0", () => {
    const longText = Cypress._.repeat("alice ", 15);
    cy.get('input[name="firstName"]').type("Alice");
    cy.get('input[name="lastName"]').type("Motin");
    cy.get('input[id="email"]').type("alice@gmail.com");
    cy.get('textarea[name="open-text-area"]').type(longText, { delay: 0 });
    cy.get('button[class="button"]').click();
    cy.get('span[class="success"]').should(
      "be.visible",
      "Mensagem enviada com sucesso."
    );
  });
  it("exercício extra 2 - exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    cy.get('input[name="firstName"]').type("Alice");
    cy.get('input[name="lastName"]').type("Motin");
    cy.get('input[id="email"]').type("alicegmail.com");
    cy.get('textarea[name="open-text-area"]').type("Curso muito bom, gostei!");
    cy.get('button[class="button"]').click();
    cy.get('span[class="error"]').should(
      "be.visible",
      "Valide os campos obrigatórios!"
    );
  });
  it("exercício extra 3 - campo continua vazio quando preenchido com um valor não-numérico", () => {
    cy.get('input[id="phone"]')
      .type("alice@gmail.com")
      .should("have.value", "");
  });

  it("exercício extra 4 - exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", () => {
    cy.get('input[name="firstName"]').type("Alice");
    cy.get('input[name="lastName"]').type("Motin");
    cy.get('input[id="email"]').type("alice@gmail.com");
    cy.get("#phone-checkbox").click();
    cy.get('textarea[name="open-text-area"]').type("Curso muito bom, gostei!");
    cy.get('button[type="submit"]').click();
    cy.get('span[class="error"]').should("be.visible");
  });

  it("exercício extra 5 - preenche e limpa os campos nome, sobrenome, email e telefone", () => {
    cy.get('input[name="firstName"]')
      .type("Alice")
      .should("have.value", "Alice")
      .clear()
      .should("have.value", "");
    cy.get('input[name="lastName"]')
      .type("Motin")
      .should("have.value", "Motin")
      .clear()
      .should("have.value", "");
    cy.get('input[id="email"]')
      .type("alice@gmail.com")
      .should("have.value", "alice@gmail.com")
      .clear()
      .should("have.value", "");
    cy.get('input[id="phone"]')
      .type("999")
      .should("have.value", "999")
      .clear()
      .should("have.value", "");
  });

  it("exercício extra 6 - exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", () => {
    cy.get('button[type="submit"]').click();
    cy.get('span[class="error"]').should("be.visible");
  });

  it("exercício extra 7 - envia o formuário com sucesso usando um comando customizado", () => {
    cy.fillMandatoryFieldsAndSubmit();
    cy.get('span[class="success"]').should("be.visible");
  });

  it.only("exercício extra 8 - cy.contains()", () => {
    cy.get('button[type="submit"]').click();
    cy.get('span[class="error"]').should("be.visible");
  });
});
