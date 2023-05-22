describe("template spec", () => {
  it("Calcul", () => {
    cy.visit("http://localhost/testing/");

    cy.get("#number1").type("15");
    cy.get("#number2").type("3");

    cy.get("#btn").click();

    cy.get("#result").should("have.text", "Le résultat de l'addition est : 18");
  });

  it("Champs_vides", () => {
    cy.visit("http://localhost/testing/");

    cy.get("#btn").click();

    cy.get("#result").should(
      "have.text",
      "Veuillez saisir des nombres valides.😜"
    );
  });
});
