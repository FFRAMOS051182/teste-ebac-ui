/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve faser login com sucesso', () => {
        cy.get('#username').type('fabiana.teste@teste.com.br')
        cy.get('#password').type('Juli160710..')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá, fabiana.teste (não é fabiana.teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('fabiana.ebac@teste.com.br')
        cy.get('#password').type('Juli160710..')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao iserir senha inválida', () => {
            cy.get('#username').type('fabiana.teste@teste.com.br')
            cy.get('#password').type('Juli160710')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail fabiana.teste@teste.com.br está incorreta. Perdeu a senha?')
            cy.get('.woocommerce-error').should('exist')

        });

    });