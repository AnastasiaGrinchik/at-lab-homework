import { elementToBeClickable, visibilityOf } from 'wdio-wait-for';
import { AwesomeShopHomePage } from './AwesomeShopHomePage.js';

export class ProductOptionsPage extends AwesomeShopHomePage {
    constructor() {
        super();
        this.formXpath = '//*[@id="product"]';
        this.quantityXpath = '//input[@id="input-quantity"]';
        this.buttonAddToCardXpath = '//button[@id="button-cart"]';
    }

    async setQuantityOfProduct(quantity) {
        let form = await browser.$(this.formXpath);
        let quantityInput = await form.$(this.quantityXpath);
        await form.waitUntil(elementToBeClickable(quantityInput));
        await quantityInput.setValue(quantity);
    }

    async addToCart() {
        let form = await browser.$(this.formXpath);
        let buttonAddToCard = await form.$(this.buttonAddToCardXpath);
        await form.waitUntil(elementToBeClickable(buttonAddToCard));
        await buttonAddToCard.click();
    }
}
export let ProductOptionsForm = new ProductOptionsPage();
