export class CareerPage {

    //navigate to demo page
    navigate() {
        cy.visit('https://www.xeneta.com/careers', {timeout: 100000})
    }
    openrole() {
        cy.get(':nth-child(6) > .accordion_group > .accordion_header > .acdn-heading > h4').should('include.text','Open application').click()
    }
    
}

export class OurValues{

    //Ourvalues tabs
xenataisone() {

    cy.get('[data-tab="Xenetaisone-1"]').click()
           cy.get('#Xenetaisone-1 > .row-fluid-wrapper > .row-fluid > .left-col > .left-content > img').should('be.visible') 
           cy.get('#Xenetaisone-1 > .row-fluid-wrapper > .row-fluid > .right-col > .base-color-text > h2').should('be.visible')
           cy.contains('We stick together, help each other and never leave people behind.').should('be.visible')
}
modernization(){
    cy.get('[data-tab="Modernizationthroughdata-2"]').click()
           cy.get('#Modernizationthroughdata-2 > .row-fluid-wrapper > .row-fluid > .left-col > .left-content > img').should('be.visible') 
           cy.get('#Modernizationthroughdata-2 > .row-fluid-wrapper > .row-fluid > .right-col > .base-color-text > h2').should('be.visible')
           cy.contains('We challenge conventional views and build solutions that exceed expectations.').should('be.visible')
}
varietyandfairness(){
    cy.get('[data-tab="VarietyandFairness-3"]').click()
           cy.get('#VarietyandFairness-3 > .row-fluid-wrapper > .row-fluid > .left-col > .left-content > img').should('be.visible') 
           cy.get('#VarietyandFairness-3 > .row-fluid-wrapper > .row-fluid > .right-col > .base-color-text > h2').should('be.visible')
           cy.contains('Everyone is free to apply and be fairly considered').should('be.visible')
}

transparency(){
    cy.get('[data-tab="TransparencybuildsTrust-4"]').click()
           cy.get('#TransparencybuildsTrust-4 > .row-fluid-wrapper > .row-fluid > .left-col > .left-content > img').should('be.visible') 
           cy.get('#TransparencybuildsTrust-4 > .row-fluid-wrapper > .row-fluid > .right-col > .base-color-text > h2').should('be.visible')
           cy.contains('Transparency is vital to building honesty and trust.').should('be.visible')
}

}

export class GlobalTribe{

    productcards(){
        cy.get('.hs_cos_wrapper.single-post').should('have.length',3)
    }

    Locations(){
        cy.fixture('testdata').then(testdata =>{
            const city1 = testdata[0].city1
            const city2 = testdata[1].city2
            const city3 = testdata[2].city3
            cy.get('#slick-slide00').find('h4').should('include.text',city1)
            cy.get('#slick-slide01').find('h4').should('include.text',city2)
            cy.get('#slick-slide02').find('h4').should('include.text',city3)
        })
    }
    VisitLink(){
        cy.get('.card-content').find('.cta_button').should('have.length',3).and('be.visible').and('have.attr','href')
    }
}