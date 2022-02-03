import { elementToBeClickable, visibilityOf } from 'wdio-wait-for';
import { AwesomeShopHomePage } from './AwesomeShopHomePage.js';

export class ProductOptionsPage extends AwesomeShopHomePage {
    constructor() {
        super();
        this.formXpath = '//*[@id="product"]';
        this.radioGroupXpath = '//div[@id="input-option218"]';
        this.radioItemXpath = '//input[@value="6"]';
        this.checkboxGroup = '//*[@id="input-option223"]';
        this.checkboxItemTwoXpath = '//input[@value="9"]';
        this.checkboxItemFourXpath = '//input[@value="11"]';
        this.textXpath = '//input[@id="input-option208"]';
        this.textAreaXpath = '//*[@id="input-option209"]';
        this.selectColorXpath = '//select[@id="input-option217"]';
        this.selectColorItemXpath = '//option[@value="1"]';
        this.textareaXpath = '//textarea[@id="input-option209"]';
        this.quantityXpath = '//input[@id="input-quantity"]';
        this.buttonAddToCardXpath = '//button[@id="button-cart"]';
    }

    async addRadioButton(listXpath, radioButtonXpath) {
        let form = await browser.$(this.formXpath);
        let radioGroup = await form.$(listXpath);
        let radioButton = await radioGroup.$(radioButtonXpath);
        await radioGroup.waitUntil(elementToBeClickable(radioButton));
        await radioButton.click();
    }

    async addCheckbox(listXpath, checkboxXpath) {
        let form = await browser.$(this.formXpath);
        let checkboxGroup = await form.$(listXpath);
        let checkbox = await checkboxGroup.$(checkboxXpath);
        await checkboxGroup.waitUntil(elementToBeClickable(checkbox));
        await checkbox.click();
    }

    async fillTextarea(textareaXpath, data) {
        let form = await browser.$(this.formXpath);
        let textarea = await form.$(textareaXpath);
        await textarea.setValue(data);
    }

    async selectColor(itemXpath) {
        let form = await browser.$(this.formXpath);

        let list = await form.$(this.selectColorXpath);
        await form.waitUntil(elementToBeClickable(list));
        await list.click();
        let item = await list.$(itemXpath);
        await list.waitUntil(visibilityOf(item));
        await item.click();
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

    async fillForm() {
        await this.addRadioButton(this.radioGroupXpath, this.radioItemXpath);
        await this.addCheckbox(this.checkboxGroup, this.checkboxItemTwoXpath);

        await this.addCheckbox(this.checkboxGroup, this.checkboxItemFourXpath);
        await this.fillTextarea(this.textXpath, 'Apple Cinema 30');
        await this.selectColor(this.selectColorItemXpath);
        await this.fillTextarea(this.textAreaXpath, 'I really want to buy it!');

        await ProductOptionsForm.setQuantityOfProduct('3');
        await ProductOptionsForm.addToCart();
    }
}
export let ProductOptionsForm = new ProductOptionsPage();
