import { elementToBeClickable } from 'wdio-wait-for';
import { BasicPage } from './BasicPage';
export class ConfirmOrderPage extends BasicPage {
    constructor() {
        super();
        this.formXpath = '//form[@class="form-horizontal"]';
        this.buttonConfirmOrderXpath = '//input[@id="button-confirm"] ';
    }

    async fillPaymentMethod() {
        let form = await browser.$(this.formXpath);
        let buttonConfirm = await form.$(this.buttonConfirmOrderXpath);
        await form.waitUntil(elementToBeClickable(buttonConfirm));
        await buttonConfirm.click();
    }
}
export let ConfirmOrder = new ConfirmOrderPage();
