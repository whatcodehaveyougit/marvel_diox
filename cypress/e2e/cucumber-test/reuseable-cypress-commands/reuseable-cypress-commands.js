import { Given, When } from "@badeball/cypress-cucumber-preprocessor";


Given('the user visits the page {string}', ( page ) => {
  cy.visit( page ) 
})

Given('the page hyperlink should contain {string}', ( page ) => {
  cy.url().should('include', page)
})

When('the user should see the string {string}', ( string ) => {
  cy.get('body').contains( string )
})

When('the user should not see the string {string}', ( string ) => {
  cy.get('body').should('not.contain', string)  
})

When('the user clicks on the first element which says {string}', ( string ) => {
  cy.get('body').contains( string ).first().click()
})

When('the user clicks the element which says {string}', ( string ) => {
  cy.get('body').contains( string ).click()
})

When('the user types {string} into the input element with the name {string}', (userInput, inputBoxName ) => {
  cy.get(`input[name=${inputBoxName}]`).type(userInput)
})

