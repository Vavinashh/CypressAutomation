/// <reference types="Cypress" />
describe('My Fifth Test Suite', function() 
{
 
it('My Fifth Test case',function() {
 
//Using Cypress naviagtion inbetween pages is not avilable so if there is a page need to be navigated we need to close the present tab and load the new tab
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('#opentab').invoke('removeAttr','target').click()

cy.origin("https://www.qaclickacademy.com/",()=>
{
    cy.get("#navbarSupportedContent a[href*='about']").click();
    cy.get(".mt-50 h2").should('contain','QAClick Academy');

})

})

})