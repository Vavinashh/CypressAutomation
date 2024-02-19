/// <reference types="Cypress" />
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
import CheckOutPage from '../../../../support/pageObjects/CheckOutPage'

import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
// npx cypress run --spec cypress/integration/examples/BDD/*.feature --headed --browser chrome --env url="https://google.com"
const homePage=new HomePage()
const productPage=new ProductPage()
const checkOutPage=new CheckOutPage()
let name
Given('I open ECommerce Page',()=>
{
    cy.visit(Cypress.env('url')+"/angularpractice/")
})

// When I add items to Cart
When('I add items to Cart',function ()
{
    homePage.getShopTab().click()

    this.data.productName.forEach(function(element)
    {
    cy.selectProduct(element)
   });
    productPage.CheckoutButton().click()
})

//And Validate the total prices
When('Validate the total prices',()=>
{
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
    })

    //Then select the country submit and verify Thankyou

Then('select the country submit and verify Thankyou',()=>
    {
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
    //When I fill the form details
When('I fill the form details',function(dataTable)
    {

        // [bobz , male   ]
        name = dataTable.rawTable[1][0]
        homePage.getEditBox().type(dataTable.rawTable[1][0])
        homePage.getGender().select(dataTable.rawTable[1][1])
        //homePage.getNameEditBox().type(this.data.name)
        //homePage.getGender().select(this.data.gender)



    })
    // Then validate the forms behaviour
Then('validate the forms behaviour',function()
    {
    homePage.getTwoWayDataBindingBox().should('have.value', this.data.name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneaur().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 8000)
    })
    // And select the Shop Page

Then('select the Shop Page',()=>
    {
        homePage.getShopTab().click()
    })
