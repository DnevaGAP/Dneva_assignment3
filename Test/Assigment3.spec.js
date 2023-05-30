/// <reference types="cypress" />
import { NewBankAccountPage } from "../PageObjects/Pages/NewBankAccount";

describe('Base File', () => {
    let bankName='Banco de prueba'
    let routingNumber=123456789
    let accountNumber=987654321

    beforeEach('log in', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get('#username').clear().type('Katharina_Bernier')
        cy.get('#password').clear().type('s3cret')
        cy.get('.MuiButton-label').click()
        cy.get('H6[data-test="sidenav-user-full-name"]').should('have.text','Edgar J')
        });
    
    afterEach('log out', () => {
        cy.get('.MuiListItemText-primary').contains('Logout').click()
        cy.get('h1').should('have.text','Sign in')
        });

    it('create new bank account', () => { 
        NewBankAccountPage.addNewBA(bankName,routingNumber,accountNumber);
        NewBankAccountPage.elements.getCreatedAccount().contains(bankName).should('exist');
    });
         
 });
