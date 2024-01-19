/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/ProductPage"
describe('My 9th Test Suite', function() 
{

    before(function(){

        cy.fixture('TestData').then(function(data)
        {
            this.data = data
        })

    })
 
 it('My 9th Test case',function() {
const homepage = new HomePage()
const productPage = new ProductPage()

     cy.visit("https://rahulshettyacademy.com/angularpractice/")

     homepage.getNameEditBox().type(this.data.name)
     homepage.getGender().select(this.data.gender)
     homepage.getTwoWayDataBindingBox().should('have.value', this.data.name)
     homepage.getNameEditBox().should('have.attr', 'minlength', '2')
     homepage.getEntrepreneurRadioButton().should('be.disabled')

     homepage.getShopTab().click()

     
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays


     this.data.productName.forEach(function(element){

     cy.selectProduct(element)

     cy.wait(6000);

     productPage.CheckoutButton().click()


    });

 })

})