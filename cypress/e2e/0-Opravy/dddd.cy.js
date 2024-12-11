///<reference types="cypress"/>

before("Navstiv stranku", () => {
    cy.visit("https://web.automationtesting.sk/");
    cy.viewport(1500, 1000);
  })
   
  it("Telo", () => {
   
    cy.get(".elementor-item").contains("Multi Step Form").click()
    cy.get(".page-header").should("exist", "MultiStep Form")
    cy.get(".fw-current").eq(0).should("exist", "Order Details")
    cy.get(".fw-progress-wrap li:nth-child(1)").should("exist")
  
    cy.get(".fw-step-part-body").find("#msf-text-your-name").should("exist")
    cy.get(".fw-step-part-body").find("#msf-mail-your-email").should("exist")
    cy.get(".fw-step-part-body").find("#msf-date-select-date-of-order").should("exist")
  
    cy.get('[type="radio"]').check({force:true}).should("be.checked")
  
    cy.get(".fw-step-part-body").find("#msf-text-your-name").type("Jaroslav Mikus").should("have.value", "Jaroslav Mikus")
    cy.get(".fw-step-part-body").find("#msf-mail-your-email").type("jarmik@mail.com").should("have.value", "jarmik@mail.com")
  
    cy.get(".fw-step-part-body").find("#msf-date-select-date-of-order").click();
    cy.get(".ui-datepicker-month").select("Jan");
    cy.get(".ui-datepicker-year").select("2002");
    cy.get(".ui-datepicker-calendar tr:nth-child(3)").contains("16").click().shou
    cy.get(".fw-step-part-body").find("#msf-date-select-date-of-order").should("have.value", "2002-01-16")
  
    cy.get(".fw-button-next").click();
    cy.get(".fw-progress-wrap li:nth-child(2)").should("exist")
  
    cy.get(".fw-step-block input:nth-child(1)").check({force:true});
    cy.get(".fw-select").select('Yes',{force:true});
  
    cy.get(".fw-button-next").click();
    cy.contains("ZOBRAZIŤ SÚHRN").click();
  
    cy.get("#wizard-summary").should("exist");
    cy.contains("Odoslať").click();
  })