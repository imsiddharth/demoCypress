/// <reference types="cypress" />

it('should be able to add a new todo to the list', () => {
    cy.visit('https://todomvc-app-for-testing.surge.sh');
    debugger;
    cy.get('.new-todo', {timeout: 6000}).type('wash utensils {enter}')
    debugger;
    cy.get('label').should('have.text', 'wash utensils').debug();
    cy.get('.toggle').should('not.be.checked')
    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
    cy.contains('Clear completed').click()
    cy.get('.todo-list').should('not.have.descendants', 'li')
});

// import { Demo } from "../../pageObject/demo.page";
// describe('Giving Example PageObject', () => {
//     const demo = new Demo;
//     it('demo', () => {
//         demo.navigate();
//         demo.addList('wash utensils');
//         demo.validateList('wash utensils');
//     });
// });

