import { goToHomePage, logIn, fillAndSendFormProduct } from '../../../app/index';
import { productOption, loginData } from '../../../app/data';

describe('Success message after adding item to cart', () => {
  before(() => {
    goToHomePage();
    logIn(loginData);
    goToHomePage();
    fillAndSendFormProduct(productOption);
  });
  it('Display message containing text: "Success: You have added Apple Cinema 30""', () => {
    cy.get('.alert.alert-success.alert-dismissible').invoke('text').then((text) => {
      expect(text).to.include('Success: You have added Apple Cinema 30"');
    });
  });
});
