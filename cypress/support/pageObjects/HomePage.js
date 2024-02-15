class HomePage
{

getNameEditBox(){
    return cy.get('input[name="name"]:nth-child(2)')

}

getEmailEditBox(){
    return cy.get('input[name="email"]:nth-child(2)')

}

getPasswordEditBox(){
    return cy.get('input[id="exampleInputPassword1"]:nth-child(2)')

}


getTwoWayDataBindingBox(){
    return cy.get(':nth-child(4) > .ng-untouched')

}

getGender(){
    return cy.get('select')
}

getEntrepreneurRadioButton(){
    return cy.get('#inlineRadio3')
}

getShopTab(){
    return cy.get(':nth-child(2) > .nav-link')
}

getHomeTab(){
    return cy.get(':nth-child(1) > .nav-link')
}

getSubmitTab(){
    return cy.get('input[@class="btn btn-success"]')
}

}

export default HomePage;