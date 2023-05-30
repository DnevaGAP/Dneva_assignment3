export class NewBankAccount {
    elements={ 
        getOpenBank: () => cy.get('.MuiButtonBase-root').contains('Bank'),
        getCreateButton: () => cy.get('.MuiButton-label').contains('Create'),
        getBankName: () => cy.get('#bankaccount-bankName-input'),
        getRoutingNumber: () => cy.get('#bankaccount-routingNumber-input'),
        getAccountNumber: () => cy.get('#bankaccount-accountNumber-input'),
        getSubmitButton: () => cy.get('Button[data-test="bankaccount-submit"]'),
        getCreatedAccount: () => cy.get('.MuiListItem-root')
    }
     
 
    addNewBA (bankName, routingNumber, accountNumber){
    this.elements.getOpenBank().click()
    this.elements.getCreateButton().click();
    this.elements.getBankName().clear().type(bankName);
    this.elements.getRoutingNumber().clear().type(routingNumber);
    this.elements.getAccountNumber().clear().type(accountNumber);
    this.elements.getSubmitButton().click();
    }
}

export const NewBankAccountPage=new NewBankAccount();
