class CheckOutPage
{

clickCheckOutButton(){
    return cy.contains('Checkout')
}

getCountry(){
    return cy.get('#country')
}

clickCountry(){
    return cy.get('.suggestions > ul > li > a')
}

clickCheckBox(){
    return cy.get('.checkbox')
}

clickPurchaseButton(){
    return cy.get('.ng-untouched > .btn')
}


}

export default CheckOutPage;