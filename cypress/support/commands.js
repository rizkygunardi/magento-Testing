Cypress.Commands.add("FormAddress", () => {
  cy.get("#shipping > .step-title")
    .contains("Shipping Address")
    .should("be.visible");
  cy.get("#customer-email-fieldset > .required > .control > #customer-email")
    .type("rizky@email.com")
    .should("have.value", "rizky@email.com");
  cy.get("input[name='firstname']").type("Rizky").should("have.value", "Rizky");
  cy.get("input[name='lastname']")
    .type("Gunardi")
    .should("have.value", "Gunardi");
  cy.get("input[name='company']")
    .type("Garage Company")
    .should("have.value", "Garage Company");
  cy.get("input[name='street[0]']")
    .type("New York")
    .should("have.value", "New York");
  cy.get("input[name='city']")
    .type("New York City")
    .should("have.value", "New York City");
  cy.get("select[name='region_id']").select("Alaska").should("have.value", "2");
  cy.get("input[name='postcode']").type("12345").should("have.value", "12345");
  cy.get("select[name='country_id']")
    .select("United States")
    .should("have.value", "US");
  cy.get("input[name='telephone']")
    .type("077234789234")
    .should("have.value", "077234789234");
  cy.get(":nth-child(2) > :nth-child(1) > .radio").click();
  cy.get(".button").click();
  cy.get(
    ".payment-method-content > :nth-child(4) > div.primary > .action"
  ).click();
  cy.get(".base").should("contain.text", "Thank you for your purchase!");
});
