/// <reference types="Cypress" />
/// <reference types= "Cypress-iframes"/>
import 'cypress-iframe'


describe('Frames Test Suite', function() 
{
 
it('Frames Test case',function() {
 
cy.visit(Cypress.env('url')+"/AutomationPractice/")

cy.frameLoaded("#courses-iframe")

cy.iframe().find("a[href*='mentorship']").eq(0).click()

cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

})

})  