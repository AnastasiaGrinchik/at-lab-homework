import { elementToBeClickable } from 'wdio-wait-for';
import { BasicPage } from './BasicPage';
export class PaymentMethodPage extends BasicPage {
    constructor() {
        super();
        this.formXpath = '//form[@class="form-horizontal"]';
        this.radioCashOnXpath =
            '//input[@name="payment_method" and @value="cod"]';
        this.checkboxAgreeXpath = '//input[@type="checkbox" and @name="agree"]';
        this.buttonContinueXpath = '//input[@id="button-payment-method"]';
    }

    async fillPaymentMethod() {
        let form = await browser.$(this.formXpath);
        let radioCashOn = await form.$(this.radioCashOnXpath);
        await form.waitUntil(elementToBeClickable(radioCashOn));
        await radioCashOn.click();

        let checkboxAgree = await form.$(this.checkboxAgreeXpath);
        await form.waitUntil(elementToBeClickable(checkboxAgree));
        await checkboxAgree.click();

        let buttonContinue = await form.$(this.buttonContinueXpath);
        await form.waitUntil(elementToBeClickable(buttonContinue));
        await buttonContinue.click();
    }
}
export let PaymentMethod = new PaymentMethodPage();
