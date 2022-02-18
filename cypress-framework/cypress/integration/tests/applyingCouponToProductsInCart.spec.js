import {
  goToHomePage, logIn, fillAndSendFormProduct, goToCart, applyCoupon,
} from '../../../app/index';
import { productOption, loginData } from '../../../app/data';

describe('Applying coupon to items in cart', () => {
  before(() => {
    goToHomePage();
    logIn(loginData);
    goToHomePage();
    fillAndSendFormProduct(productOption);
    goToCart();
    applyCoupon();
  });
  it('A message will appear stating that the coupon has been applied successfully', () => {
    cy.get('alert.alert-success.alert-dismissible').invoke('text').then((text) => {
      expect(text).to.include('Success: Your coupon discount has been applied!');
    });
  });
  it('15% discount is calculated correct after applying a coupon', () => {
    cy.get('.col-sm-4.col-sm-offset-8 .table.table-bordered tr:nth-child(2)').contains('$-').invoke('text').then((text) => {
      expect(text).to.equal('$-108.60');
    });
  });
  it('VAT 20% discount is calculated correct', () => {
    cy.get('.col-sm-4.col-sm-offset-8 .table.table-bordered tr:nth-child(3)').contains('$').invoke('text').then((text) => {
      expect(text).to.equal('$123.08');
    });
  });
});
