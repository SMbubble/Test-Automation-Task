/************************** TEST ASSIGNMENT DEMO PAGE **************************
* TESTCASE 1: Click on watch videos button and verify if correct page is being opened.
* TESTCASE 2: Fill and submit Group live demo - Sign up form with valid data.
*/

//autocomplete support from vs.code for cypress

/// <reference types="cypress" />

import {DemoPage, SignUp}  from"../page-objects/demo-page";

describe('Test-Assignment Demo Page', () => {
    const demopage = new DemoPage()
    const signup = new SignUp()

    beforeEach(() => {
        demopage.navigate()
    })
    it('Test Case 1: Watch Videos', () => {
        demopage.watchvideos()
        cy.title().should('include', 'Xeneta Videos')
    })
    it('Test Case 2: Group live demo - Sign up', () => {
        demopage.signuphere()
            cy.window().get('#form-popup-3').should('be.visible')
              signup.firstname('Test')
              signup.lastname('User')
              signup.companyname('TestAutomateOrganization')
              signup.email('testuser@xeneta.com') 
              signup.jobtitle('Automation Tester') 
              signup.company('Consultant') 
              signup.subscribe()
              signup.confirm()
              signup.savemyspot()
              signup.close()   
              cy.window().get('#form-popup-3').should('not.be.visible')
 
            })

        })