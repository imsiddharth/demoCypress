/// <reference types="cypress" />

it('should be able to add a new todo to the list', () => {
    cy.visit('https://todomvc-app-for-testing.surge.sh');
    cy.get('.new-todo', {timeout: 6000}).type('wash utensils {enter}')
    cy.get('label').should('have.text', 'wash utensils')
    cy.get('.toggle').should('not.be.checked')
    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
    cy.contains('Clear completed').click()
    cy.get('.todo-list').should('not.have.descendants', 'li')
});
