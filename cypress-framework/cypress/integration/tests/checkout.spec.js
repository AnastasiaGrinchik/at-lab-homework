import {
  goToHomePage,
  logIn,
  fillAndSendFormProduct,
  goToCart,
  applyCoupon,
  checkout,
  fillBillingDetailsForm,
  fillShippingForm,
  fillPaymentForm,
} from '../../../app/index';

import { userData, productOption, loginData } from '../../../app/data';

describe('Checkout', () => {
  before(() => {
    goToHomePage();
    logIn(loginData);
    goToHomePage();
    fillAndSendFormProduct(productOption);
    goToCart();
    applyCoupon();
    checkout();
    fillBillingDetailsForm(userData);
    fillShippingForm('Comment text test');
    fillPaymentForm();
  });
  it('Success message appears after successful checkout', () => {
    cy.get('#content h1').invoke('text').then((text) => {
      expect(text).to.include('Your order has been placed!');
    });
  });
  it('The order is saved in history ', () => {
    cy.get('.dropdown a[href="https://awesome-shop.ru/index.php?route=account/order"]').click();
    cy.get('.table-responsive tbody .text-right').invoke('text').then((text) => {
      expect(typeof text).to.equal('string');
      expect(text).not.to.equal('');
    });
  });
});
