import '@babel/polyfill';
import { expect } from 'chai';
import {
  awesomeShopHomePage,
  productOptionsPage,
  consiceShoppingCartOverviewPage,
  fullShoppingCartOverviewPage,
  basicPage
} from '../../pageObject_model/index.js';

describe('A product added with certain options to the cart. ', function () {
  before(async function () {
    await awesomeShopHomePage.openPage(awesomeShopHomePage.urlAwesomeHome);
    await awesomeShopHomePage.openProductPage(
      awesomeShopHomePage.appleCinema30
    );
    await productOptionsPage.fillForm();
    await awesomeShopHomePage.openConsiceOverviewCard();
    await consiceShoppingCartOverviewPage.viewCart();
    await fullShoppingCartOverviewPage.getProductOptions();
  });
  after(async function () {
    await basicPage.closeBrowser();
  });

  it('Saved the text "Radio Medium" in the "Radio" option', function () {
    expect(fullShoppingCartOverviewPage.productRadioContent).to.be.equal(
      'Radio: Medium'
    );
  });

  it('Saved the text "Checkbox: Checkbox 2" in the first "Checkbox" option', function () {
    expect(
      fullShoppingCartOverviewPage.productFirstCheckboxContent
    ).to.be.equal('Checkbox: Checkbox 2');
  });

  it('Saved the text "Checkbox: Checkbox 4" in the second "Checkbox" option', function () {
    expect(
      fullShoppingCartOverviewPage.productSecondCheckboxContent
    ).to.be.equal('Checkbox: Checkbox 4');
  });

  it('Saved the text "Text: Apple Cinema 30" in the "Text" option', function () {
    expect(fullShoppingCartOverviewPage.productTextContent).to.be.equal(
      'Text: Apple Cinema 30'
    );
  });

  it('Saved the text "Select: Green" in the "Select" option', function () {
    expect(fullShoppingCartOverviewPage.productSelectContent).to.be.equal(
      'Select: Green'
    );
  });

  it('Saved the text "Textarea: I really want to buy.." in the "Textarea" option', function () {
    expect(fullShoppingCartOverviewPage.productTextareaContent).to.be.equal(
      'Textarea: I really want to buy..'
    );
  });

  it('The discount corresponds to 20%, which is "$102.60" of the total amount.', function () {
    expect(fullShoppingCartOverviewPage.resultSumOfVat).to.be.equal('$102.60');
  });
});
