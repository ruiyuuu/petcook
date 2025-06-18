describe("template spec", () => {
  it("passes", () => {
    cy.viewport(1440, 750);
    cy.visit("http://localhost:3000/");
    cy.get("input").type("petcook");
    cy.get("button[type=submit]").click();
    cy.contains("a", "所有版型").click();
    cy.scrollTo("bottom", {
      easing: "linear",
      duration: 2000,
    });
    cy.go("back");
    cy.contains("a","急凍骰子牛凍乾").click();
    cy.scrollTo("bottom", {
      easing: "linear",
      duration: 2000,
    });
    cy.go("back");
    cy.contains("a", "五告順優格雞肉凍乾").click();
    cy.scrollTo("bottom", {
      easing: "linear",
      duration: 2000,
    });
    cy.go("back");
    cy.contains("a", "南方澳白帶魚捲凍乾").click();
    cy.scrollTo("bottom", {
      easing: "linear",
      duration: 2000,
    });
    cy.go("back");
    cy.contains("a", "五告ㄎㄧㄤ貓草雞肉凍乾").click();
    cy.scrollTo("bottom", {
      easing: "linear",
      duration: 2000,
    });
    cy.go("back");
    cy.contains("a", "急凍骰子鹿凍乾").click();
    cy.scrollTo("bottom", {
      easing: "linear",
      duration: 2000,
    });
    cy.go("back");
  });
});
