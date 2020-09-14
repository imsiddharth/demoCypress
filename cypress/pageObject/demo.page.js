/// <reference types="cypress" />

export class Demo {

    navigate(){
        cy.visit('https://todomvc-app-for-testing.surge.sh',{ timeout: 600000 });
    }

    addList(test) {
        cy.get('.new-todo', {timeout: 6000}).type(test + '{enter}')
    }

    validateList(test){
        cy.get('label').should('have.text', test);
    }
}