/// <reference types="cypress" />

describe('SauceDemo', () => {
  //Cenário 1
  it.skip('Login e Navegação', () => {
    //Acessa a página
    cy.visit('https://www.saucedemo.com');

    //Realiza login
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    //Verifica se foi redirecionado para tela inicial
    cy.url().should('include', '/inventory.html');

    //Verifica se o botão do carrinho está funcionando
    cy.get('#shopping_cart_container').click();
    cy.url().should('include', '/cart.html');

    //Verifica se a opção "All Items" do menu está funcionando
    cy.get('#react-burger-menu-btn').click();
    cy.get('#inventory_sidebar_link').click();
    cy.url().should('include', '/inventory.html');

    //Verifica se a opção "About" do menu está funcionando
    cy.get('#react-burger-menu-btn').click();
    cy.get('#about_sidebar_link').should('have.attr', 'href', 'https://saucelabs.com/');
    cy.get('#react-burger-cross-btn').click();

    //Verifica se a opção "Logout" do menu está funcionando
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('include', '/');
  });

  //Cenário 3
  it.skip('Adição de Produtos ao Carrinho', () => {
    //Acessa a página
    cy.visit('https://www.saucedemo.com');

    //Realiza login
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    //Verifica se foi redirecionado para tela inicial
    cy.url().should('include', '/inventory.html');

    //Adiciona produto ao carrinho
    cy.get('#add-to-cart-sauce-labs-backpack').click();

    //Verifica se adicionou o produto ao carrinho
    cy.get('.shopping_cart_badge').should('contain', '1');

    //Busca o nome do produto
    cy.get('.inventory_item_name').first().invoke('text').as('nomeProduto');
    //Busca a descrição do produto
    cy.get('.inventory_item_desc').first().invoke('text').as('descricaoProduto');
    //Busca o valor do produto
    cy.get('.inventory_item_price').first().invoke('text').as('valorProduto');

    //Acessa o carrinho
    cy.get('#shopping_cart_container').click();
    cy.url().should('include', '/cart.html');

    //Verifica se o nome do produto está correto
    cy.get('@nomeProduto').then((nomeProduto) => {
      cy.get('.inventory_item_name').contains(nomeProduto);
    });
    //Verifica se a descrição do produto está correta
    cy.get('@descricaoProduto').then((descricaoProduto) => {
      cy.get('.inventory_item_desc').contains(descricaoProduto);
    });
    //Verifica se o valor do produto está correto
    cy.get('@valorProduto').then((valorProduto) => {
      cy.get('.inventory_item_price').contains(valorProduto);
    });
    //Verifica se a quantidade está correta
    cy.get('.cart_quantity').should('contain', '1');

    //Remove o produto do carrinho
    cy.get('#remove-sauce-labs-backpack').click();

    //Volta para tela inicial
    cy.go('back');
    cy.url().should('include', '/inventory.html');

    //Adiciona produto 1 ao carrinho
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    //Adiciona produto 2 ao carrinho
    cy.get('#add-to-cart-sauce-labs-bike-light').click();
    //Adiciona produto 3 ao carrinho
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
    //Adiciona produto 4 ao carrinho
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
    //Adiciona produto 5 ao carrinho
    cy.get('#add-to-cart-sauce-labs-onesie').click();
    //Adiciona produto 6 ao carrinho
    cy.get('#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)').click();

    //Verifica se adicionou os 6 produtos ao carrinho
    cy.get('.shopping_cart_badge').should('contain', '6');

    //Acessa o carrinho
    cy.get('#shopping_cart_container').click();
    cy.url().should('include', '/cart.html');

    //Verifica o número de produtos no carrinho
    cy.get('.inventory_item_name').should('have.length', 6);

    //Remove produto 1 do carrinho
    cy.get('#remove-sauce-labs-backpack').click();
    //Remove produto 2 do carrinho
    cy.get('#remove-sauce-labs-bike-light').click();
    //Remove produto 3 do carrinho
    cy.get('#remove-sauce-labs-bolt-t-shirt').click();
    //Remove produto 4 do carrinho
    cy.get('#remove-sauce-labs-fleece-jacket').click();
    //Remove produto 5 do carrinho
    cy.get('#remove-sauce-labs-onesie').click();
    //Remove produto 6 do carrinho
    cy.get('#remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)').click();

    //Volta para tela inicial
    cy.go('back');
    cy.url().should('include', '/inventory.html');

    //Faz logout
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('include', '/');
  });

  //Cenário 4
  it('Finalização da Compra', () => {
    //Acessa a página
    cy.visit('https://www.saucedemo.com');

    //Realiza login
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    //Verifica se foi redirecionado para tela inicial
    cy.url().should('include', '/inventory.html');

    //Adiciona produto ao carrinho
    cy.get('#add-to-cart-sauce-labs-backpack').click();

    //Verifica se adicionou o produto ao carrinho
    cy.get('.shopping_cart_badge').should('contain', '1');

    //Busca o nome do produto
    cy.get('.inventory_item_name').first().invoke('text').as('nomeProduto');
    //Busca a descrição do produto
    cy.get('.inventory_item_desc').first().invoke('text').as('descricaoProduto');
    //Busca o valor do produto
    cy.get('.inventory_item_price').first().invoke('text').as('valorProduto');

    //Acessa o carrinho
    cy.get('#shopping_cart_container').click();
    cy.url().should('include', '/cart.html');

    //Verifica se o nome do produto está correto
    cy.get('@nomeProduto').then((nomeProduto) => {
      cy.get('.inventory_item_name').contains(nomeProduto);
    });
    //Verifica se a descrição do produto está correta
    cy.get('@descricaoProduto').then((descricaoProduto) => {
      cy.get('.inventory_item_desc').contains(descricaoProduto);
    });
    //Verifica se o valor do produto está correto
    cy.get('@valorProduto').then((valorProduto) => {
      cy.get('.inventory_item_price').contains(valorProduto);
    });
    //Verifica se a quantidade está correta
    cy.get('.cart_quantity').should('contain', '1');

    //Clica no botão "Ckeckout"
    cy.get('#checkout').click();
    cy.url().should('include', '/checkout-step-one.html');

    //Preenche as informações
    cy.get('#first-name').type('João Vitor');
    cy.get('#last-name').type('Mello');
    cy.get('#postal-code').type('85660-000');

    //Clica no botão "Continue"
    cy.get('#continue').click();
    cy.url().should('include', '/checkout-step-two.html');

    //Verifica se o nome do produto está correto
    cy.get('@nomeProduto').then((nomeProduto) => {
      cy.get('.inventory_item_name').contains(nomeProduto);
    });
    //Verifica se a descrição do produto está correta
    cy.get('@descricaoProduto').then((descricaoProduto) => {
      cy.get('.inventory_item_desc').contains(descricaoProduto);
    });
    //Verifica se o valor do produto está correto
    cy.get('@valorProduto').then((valorProduto) => {
      cy.get('.inventory_item_price').contains(valorProduto);
    });

    //Verifica se o total dos produtos está correto
    cy.get('.summary_subtotal_label').contains('Item total: $29.99');
    //Verifica se o valor da taxa está correto
    cy.get('.summary_tax_label').contains('Tax: $2.40');
    //Verifica se o valor total da compra está correto
    cy.get('.summary_info_label.summary_total_label').contains('Total: $32.39');

    //Clica no botão "Finish"
    cy.get('#finish').click();
    cy.url().should('include', '/checkout-complete.html');

    //Verifica se finalizou a compra com sucesso
    cy.get('.complete-header').contains('Thank you for your order!');
    cy.get('.complete-text').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!');

    //Clica no botão "Back Home"
    cy.get('#back-to-products').click();
    cy.url().should('include', '/inventory.html');

    //Faz logout
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('include', '/');
  });
});