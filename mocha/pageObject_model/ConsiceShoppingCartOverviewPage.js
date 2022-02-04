import { elementToBeClickable } from 'wdio-wait-for';
import { AwesomeShopHomePage } from './AwesomeShopHomePage.js';
export class ConsiceShoppingCartOverviewPage extends AwesomeShopHomePage {
  constructor() {
    super();
    this.buttonViewCartXpath = '//a[contains(text(), "View Cart")]';
  }

  async openConsiceShoppingCart() {}

  async viewCart() {
    let buttonViewCart = await browser.$(this.buttonViewCartXpath);
    await browser.waitUntil(elementToBeClickable(buttonViewCart));
    await buttonViewCart.click();
  }
}

export let consiceShoppingCartOverviewPage =
  new ConsiceShoppingCartOverviewPage();
