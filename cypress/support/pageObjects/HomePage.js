class HomePage {

    geteditBox() {

        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding() {

        return cy.get(':nth-child(4) > .ng-valid')
    }

    getGender() {

        return cy.get('select')
    }

    getEnterprenuer() {

        return cy.get('#inlineRadio3')
    }

    getShopTab() {

        return cy.get(':nth-child(2) > .nav-link')
    }


}

export default HomePage;