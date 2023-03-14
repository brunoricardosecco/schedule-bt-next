describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");

    cy.get("input[id=first_name]").type("Test");
    cy.intercept("https://pokeapi.co/api/v2/pokemon", (req) => {
      req.reply("something");
    }).as("getPokemons");
    cy.wait("@getPokemons");

    cy.get("h1").should("contain", "Test");
    cy.get("a").should("contain", "something");
  });
});
