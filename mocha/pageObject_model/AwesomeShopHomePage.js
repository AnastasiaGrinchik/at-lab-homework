import { elementToBeClickable } from 'wdio-wait-for';
import { BasicPage } from './BasicPage.js';

export class AwesomeShopHomePage extends BasicPage {
    constructor() {
        super();
        this.urlAwesomeHome = 'https://awesome-shop.ru/';
        this.appleCinema30 = '//a[contains(text(), "Apple Cinema 30")]';
        this.cartIcon = '//div[@id="cart"]';
    }

    async openProductPage(titleProduct) {
        let product = await browser.$(titleProduct);
        await product.click();
    }

    async openConsiceOverviewCard() {
        let cardIcon = await browser.$(this.cartIcon);
        await browser.waitUntil(elementToBeClickable(cardIcon));
        await cardIcon.click();
    }
}

export let AwesomeShopHome = new AwesomeShopHomePage();
