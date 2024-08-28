/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'
import CheckOutPage from '../../support/pageObjects/CheckOutPage'
describe('My 9th Test Suite', function() 
{
    before(function(){
        cy.fixture('TestData').then(function(data)
        {
            this.data = data
        })
    })
 
 it('My 9th Test case',function() {
const homePage = new HomePage()
const productPage = new ProductPage()
const checkOutPage = new CheckOutPage()

     cy.visit(Cypress.env('url')+"/angularpractice/")
     

     homePage.getNameEditBox().type(this.data.name)
     homePage.getGender().select(this.data.gender)
     homePage.getTwoWayDataBindingBox().should('have.value', this.data.name)
     homePage.getNameEditBox().should('have.attr', 'minlength', '2')
     homePage.getEntrepreneurRadioButton().should('be.disabled')
     homePage.getShopTab().click()
     //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays


     this.data.productName.forEach(function(element){
     cy.selectProduct(element)
    });
     productPage.CheckoutButton().click()

     var sum = 0

     cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

        const amount = $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)
    
    }).then(function(){
        cy.log(sum)
      })

      cy.get('h3 strong').then(function (element) {
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)
  
      })

     checkOutPage.clickCheckOutButton().click()
     checkOutPage.getCountry().type('India')
     checkOutPage.clickCountry().click()
     checkOutPage.clickCheckBox().click()
     checkOutPage.clickPurchaseButton().click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
     cy.get('.alert').then(function (element) {
        const actualText = element.text()
        expect(actualText.includes("Success")).to.be.true

    })

 })

})
