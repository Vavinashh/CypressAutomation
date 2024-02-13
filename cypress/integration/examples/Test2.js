/// <reference types="Cypress" />
describe('My Second Test Suite', function () {

    it('My Second Test Case', function () {

        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        cy.get('#autocomplete').type('Ca');
        cy.wait(2000);

        cy.get('.products').as('ProductLocator')

        cy.get('@ProductLocator').find('.product').each(($el, index, $list) => {
 
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
            cy.wrap($el).find('button').click()
            }
            })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()


    });
});