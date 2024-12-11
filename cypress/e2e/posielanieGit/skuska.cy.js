///<reference types="cypress" />

describe("10.3.1 zadanie A)", () => {
    before("Chod na stranku a nastav ju", () => {
        cy.visit("https://sortablejs.github.io/Sortable/#cloning")
        cy.viewport(1400, 1200)
        })
        
        it("Najdi a clikni",() => {
            cy.get("a").contains("Vue.Draggable").click()
            cy.get("a").contains("react-sortablejs").click()
            cy.get("a").contains("ngx-sortablejs").click()
            cy.get("a").contains("jquery-sortablejs").click()
            cy.get("a").contains("knockout-sortablejs").click()
            cy.get("a").contains("meteor-sortablejs").click()
            cy.get("a").contains("polymer-sortablejs").click()
            cy.get("a").contains("ember-sortablejs").click()
            
        })
        
        after("Refresh", () => {
            cy.reload()
    })
})