/// <reference types = "cypress" />

context('Validar menus', () => {
    it('Clicando no link comprar deve direcionar para página de compra', () => {
        cy.visit("http://lojaebac.ebaconline.art.br/")
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.contains('Produtos')

    });
});


