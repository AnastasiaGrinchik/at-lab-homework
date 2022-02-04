import { elementToBeClickable } from 'wdio-wait-for';
import { BasicPage } from './BasicPage.js';

export class AwesomeShopHomePage extends BasicPage {
  constructor() {
    super();
    this.urlAwesomeHome = 'https://awesome-shop.ru/';
    this.iphone = '//div[@class="product-thumb transition"]//a[contains(text(), "iPhone")]';
    this.cartIcon = '//div[@id="cart"]';
    this.buttonAccount = '//a[contains(text(), "My Account")]';
  }

  async openProductPage(titleProduct) {
    let product = await browser.$(titleProduct);
    await browser.waitUntil(elementToBeClickable(product));
    await product.click();
  }

  async openConsiceOverviewCard() {
    let cardIcon = await browser.$(this.cartIcon);
    await browser.waitUntil(elementToBeClickable(cardIcon));
    await cardIcon.click();
  }

  async goToMyaccount() {
    let buttonAccount = await browser.$(this.buttonAccount);
    await browser.waitUntil(elementToBeClickable(buttonAccount));
    await buttonAccount.click();
  }
}

export let awesomeShopHomePage = new AwesomeShopHomePage();
