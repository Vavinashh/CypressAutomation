/// <reference types="Cypress" />
describe('My First Test Suite', function () {

    it('My First Test Case', function () {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type('Ca');
        cy.wait(2000);
        cy.get('.product').should('have.length', 5);
        //for visible products only
        cy.wait(2000);
        cy.get('.product:visible').should('have.length', 4);
        //parent and child chaining 
        cy.wait(2000);

        cy.get('.products').as('ProductLocator')
        cy.get('@ProductLocator').find('.product').should('have.length', 4);

        // select or click on element
        cy.get('@ProductLocator').find('.product').eq(2).contains('ADD TO CART').click();

        //Select a element in a loop

        cy.get('@ProductLocator').find('.product').each(($el, index, $list) => {
 
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
            cy.wrap($el).find('button').click()
            }
            })

        // Select and print in log
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())
        })

        //Assertion
        cy.get('.brand').should('have.text','GREENKART')

    });
});
