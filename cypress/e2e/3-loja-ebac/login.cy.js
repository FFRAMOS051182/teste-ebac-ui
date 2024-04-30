/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Deve faser login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('fabiana.teste@teste.com.br')
        cy.get('#password').type('Juli160710..')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content'). should('contain', 'Olá, fabiana.teste (não é fabiana.teste? Sair)')
    })

})