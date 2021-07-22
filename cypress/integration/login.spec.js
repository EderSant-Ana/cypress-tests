/// <reference types = "cypress" />
import LoginPage from '../support/pagesObjects/login'
import MinhaContaPage from '../support/pagesObjects/minhaConta'

//const data = require('../fixtures/user.json')

context('Login', () => {

    let data

    before(() =>{
        cy.fixture('user').then(dadosUsuario =>{
            data = dadosUsuario
        })
    });

    beforeEach(() =>{
        cy.visit("http://lojaebac.ebaconline.art.br/")
    });    

    it('Com usuário cadastrado redirecionar para página de Minha Conta', () => {
        cy.get('.icon-user-unfollow').click()
        //cy.get('#username').type('eshi')
        //cy.get('#password').type('teste@123')

        //CONST?FIXTURE
        //cy.get('#username').type(data.usuario)
        //cy.get('#password').type(data.senha)
        //cy.get('.woocommerce-form > .button').click()
        //cy.get('a > .hidden-xs').should('contain', 'Welcome Eshi Cruz !')

        //PAGEOBJECTS
        LoginPage.login(data.usuario, data.senha)
        MinhaContaPage.getUsuarioLogado().should('contain', 'Welcome Eshi Cruz !')
        
    });
});

afterEach(() =>{
    //cy.screenshot()
})
