import {
  goToHomePage, logIn, fillAndSendFormProduct, goToCart,
} from '../../../app/index';

import { productOption, loginData } from '../../../app/data';

require('cypress-xpath');

describe('Saving the selected options when adding a product to the cart', () => {
  before(() => {
    goToHomePage();
    logIn(loginData);
    goToHomePage();
    fillAndSendFormProduct(productOption);
    goToCart();
  });
  it('Saved the text "Radio: Medium" in the "Radio" option', () => {
    cy.xpath('//small[contains(text(), "Radio")]').invoke('text').then((text) => {
      expect(text).to.include('Medium');
    });
  });
  it('Saved the text "Checkbox: Checkbox 3" in the first "Checkbox" option', () => {
    cy.xpath('//small[contains(text(), "Radio")]//following-sibling::small[contains(text(), "Checkbox")]').invoke('text').then((text) => {
      expect(text).to.include('Checkbox 3');
    });
  });
  it('Saved the text "Checkbox: Checkbox 4" in the second "Checkbox" option', () => {
    cy.xpath('//small[contains(text(), "Radio")]//following-sibling::small[contains(text(), "Checkbox")]//following-sibling::small[contains(text(), "Checkbox")]').invoke('text').then((text) => {
      expect(text).to.include('Checkbox 4');
    });
  });
  it('Saved the text "Text: Apple Cinema 30" in the "Text" option', () => {
    cy.xpath('//small[contains(text(), "Text")]').invoke('text').then((text) => {
      expect(text).to.include('Testtest');
    });
  });
  it('Saved the text "Select: Green" in the "Select" option', () => {
    cy.xpath('//small[contains(text(), "Select")]').invoke('text').then((text) => {
      expect(text).to.include('Green');
    });
  });
  it('Saved the text "Textarea: Really good product! Really good product! Really good product! Really good product!" in the "Textarea" option', () => {
    cy.xpath('//small[contains(text(), "Textarea")]').invoke('text').then((text) => {
      expect(text).to.include('Really good product!..');
    });
  });
});
