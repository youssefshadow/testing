describe("template spec", () => {
  it("performs calculation", () => {
    cy.visit("http://localhost/testing/");

    cy.get("#number1").type("5");
    cy.get("#number2").type("3");

    cy.get("#btn").click();

    cy.get("#result").should("have.text", "Le résultat de l'addition est : 8");
  });
});
