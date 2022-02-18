import {
  goToHomePage, logIn, fillAndSendFormProduct, goToCart, applyCoupon,
} from '../../../app/index';
import { productOption, loginData } from '../../../app/data';

require('cypress-xpath');

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
    cy.xpath('//div[@class="alert alert-success alert-dismissible"]').invoke('text').then((text) => {
      expect(text).to.include('Success: Your coupon discount has been applied!');
    });
  });
  it('15% discount is calculated correct after applying a coupon', () => {
    cy.xpath('//*[contains(text(), "Coupon (LuckyUser):")]/../following-sibling::td[contains(text(), "$")]').invoke('text').then((text) => {
      expect(text).to.equal('$-108.60');
    });
  });
  it('VAT 20% discount is calculated correct', () => {
    cy.xpath('//*[contains(text(), "VAT (20%):")]/../following-sibling::td[contains(text(), "$")]').invoke('text').then((text) => {
      expect(text).to.equal('$123.08');
    });
  });
});
