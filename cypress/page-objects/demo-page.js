export class DemoPage {

    //navigate to demo page
    navigate() {
        cy.visit('https://www.xeneta.com/demo', {timeout: 100000})
    }
    watchvideos(){
        cy.get('#cta_button_1816946_9de3cc6a-09e2-43f8-a2ff-7688cf0588ee').click()
    }
    signuphere(){
        cy.get(':nth-child(3) > .bullets-card-content > .text-body > p > .align-center > .popup-btn').click()
    }
    
}

export class SignUp {
//sign up here form input fields 
firstname(Firstname) {
    //cy.get('#firstname-d0f2734d-64a0-4b9b-8362-d150b5b5374c_1321').type(Firstname)
    cy.get('.input').find('[name=firstname]').eq(2).type(Firstname)
    
}
lastname(Lastname){
   // cy.get('#lastname-d0f2734d-64a0-4b9b-8362-d150b5b5374c_1321').type(Lastname)
    cy.get('.input').find('[name=lastname]').eq(2).type(Lastname)
}
companyname(Companyname){
   // cy.get('#company-d0f2734d-64a0-4b9b-8362-d150b5b5374c_1321').type(Companyname)
    cy.get('.input').find('[name=company]').eq(2).type(Companyname)
}
email(Email){
    //cy.get('#email-d0f2734d-64a0-4b9b-8362-d150b5b5374c_1321').type(Email)
    cy.get('.input').find('[name=email]').eq(2).type(Email)
}
jobtitle(JobTitle){
   // cy.get('#jobtitle-d0f2734d-64a0-4b9b-8362-d150b5b5374c_1321').type(JobTitle)
   cy.get('.input').find('[name=jobtitle]').eq(1).type(JobTitle)
}
company(Company){
   // cy.get('#type_of_prospect-d0f2734d-64a0-4b9b-8362-d150b5b5374c_1321').select(Company).should('have.value',Company)
   cy.get('.input').find('[name=type_of_prospect]').eq(1).select(Company).should('have.value',Company)
}
subscribe(){
    //cy.get('#xeneta_industry_blog_instant_email_subscription-d0f2734d-64a0-4b9b-8362-d150b5b5374c_1321').check().should('be.checked')
    cy.get('.input').find('[name=xeneta_industry_blog_instant_email_subscription]').eq(2).check().should('be.checked')
}
confirm(){
    //cy.get('#confirm_opt_in-d0f2734d-64a0-4b9b-8362-d150b5b5374c_1321').check().should('be.checked')
    cy.get('.input').find('[name=confirm_opt_in]').eq(2).check().should('be.checked')
}
savemyspot(){
    cy.get('.hs-button.primary.large').eq(2).click({force:true})
}
close(){
    cy.get('.close-modal').click()
}
}