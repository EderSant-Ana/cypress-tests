/// <reference types = "cypress" />

context('desafio', () => {

    let quantidade = 3
    let total = "R$207,00"

    before(() =>{
       // cy.visit("http://lojaebac.ebaconline.art.br/")
    })

    it('O carrinho deve conter a quantidade informada e valor total experado', () => {
        cy.visit("http://lojaebac.ebaconline.art.br/")
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-2559 > .product-block').click()
        cy.get('.summary > .price > .woocommerce-Price-amount > bdi')
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('strong > .woocommerce-Price-amount > bdi').should('contain', total)
        cy.get('.checkout-button').click()
    });

    it('informar detalhes de faturamento e finalizar compra', () => {

        cy.get('#billing_first_name').type('João')
        cy.get('#billing_last_name').type('Silva')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Brasil')
        cy.get('.select2-results__option').click()

        //Teste quebrando após seleção do país
        cy.get('.billing_address_1').type('Rua da Amizade 1221')

        cy.get('#billing_city').type('Wonderland')
        cy.get('#billing_postcode').type('09999999')
        cy.get('#billing_phone').type('11999999999')
        cy.get('#billing_email').type('joao@gmail.com.br')        
        

    });

    afterEach(() =>{
        //cy.screenshot()
    })
});