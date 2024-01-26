/// <reference types="Cypress" />
describe('My Fourth Test Suite', function() 
{
 
it('My Fourth Test case',function() {
 
//Check boxes
cy.visit(Cypress.env('url')+"/AutomationPractice/")

cy.get('#alertbtn').click()

//window:alert
cy.on('window:alert',(str)=>
{
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

cy.get("input[value='Confirm']").click()

//window:confirm
cy.on('window:confirm',(str)=>
{
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

})

})