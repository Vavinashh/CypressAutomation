/// <reference types="Cypress" />


describe('My 9th Test Suite', function() 
{

    before(function(){

        cy.fixture('TestData').then(function(data)
        {
            this.data = data
        })

    })
 
it('My 9th Test case',function() {

    cy.visit("https://rahulshettyacademy.com/angularPractice/")
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
    cy.get('select').select(this.data.gender)


    cy.get().should('have.value', this.data.name)
    cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
    cy.get('#inlineradio3').should('be.disabled')
 

})

})