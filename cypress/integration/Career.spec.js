/*
******************************* TEST ASSIGNMENT CAREER PAGE ************************************
* TESTCASE 1: Verify the functionality of all the tabs unders Our Values section
* TESTCASE 2: Verify the Global Tribe section and elements in each product cards
* TESTCASE 3: Verify the panel toggle functionality for one of Open roles in the page
*/

import {CareerPage, OurValues, GlobalTribe}  from"../page-objects/career-page";

//autocomplete support from vs.code for cypress

/// <reference types="cypress" />

describe('Test-Assignment Career Page', () => {
    const careerpage = new CareerPage()
    const ourvalues = new OurValues()
    const globaltribe = new GlobalTribe()
   
    beforeEach(() => {
        careerpage.navigate()
    })

   it('Test Case 1: Our Values tabs verification ', () => {
      ourvalues.xenataisone()
      ourvalues.modernization()    
      ourvalues.varietyandfairness()
      ourvalues.transparency()
        
            })
                
   it('Test Case 2: Global Tribe verification ', () => {

    globaltribe.productcards()
    globaltribe.Locations(
    globaltribe.VisitLink()
    )
        })

       it('Test Case 3: Open Roles ', () => {
           
                careerpage.openrole()
                cy.get('.accordion_group.expanded').should('be.visible')
                careerpage.openrole()
                cy.get('.accordion_group').should('be.visible')
            })
        }) 

