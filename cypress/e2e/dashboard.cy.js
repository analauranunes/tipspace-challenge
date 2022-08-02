describe("next page", () => {
  it("goes to the next page of pokemons", () => {
    cy.visit("https://pokedex-three-woad.vercel.app/");
    cy.viewport(1440, 900);
    cy.get(".inactive-button");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000).contains("next").trigger("mouseover").click();
    cy.contains("ekans");
  });

  it("goes to previous page", () => {
    cy.viewport(1440, 900);
    cy.contains("previous").trigger("mouseover").click();
    cy.contains("squirtle");
  });

  it("opens a modal with pokemon info", () => {
    cy.viewport(1440, 900);
    cy.get("#bulbasaur").click();
    cy.contains("attack");
  });

  it("tries to make a comment without a valid e-mail", () => {
    cy.viewport(1440, 900);

    cy.get("input[name=name]").type("Ana");
    cy.get("input[name=email]").type("analaurahdn");
    cy.get("input[name=comment]").type(
      "Bulbasaur is one of my favorites ever!!!"
    );
    cy.contains("send").trigger("mouseover").click();

    cy.contains("invalid email, try again")
  });

  it("tries to make a comment without values", () => {
    cy.viewport(1440, 900);

    cy.contains("send").trigger("mouseover").click();

    cy.contains("invalid fields, try again")
  })

  it("makes a new comment", () => {
    cy.viewport(1440, 900);

    cy.get("input[name=name]").type("Ana");
    cy.get("input[name=email]").type("analaurahdn@gmail.com");
    cy.get("input[name=comment]").type(
      "Bulbasaur is one of my favorites ever!!!"
    );
    cy.contains("send").trigger("mouseover").click();

    cy.contains("Bulbasaur is one of my favorites ever!!!");
  });

  it("closes the modal", () => {
    cy.viewport(1440, 900);

    cy.get("#close-button").trigger("mouseover").click();

    cy.contains("charmeleon")
  });
});
