import { elementToBeClickable } from 'wdio-wait-for';
import { BasicPage } from './BasicPage.js';
export class DeliveryDetailsPage extends BasicPage {
    constructor() {
        super();
        this.formDeliveryDetailsXpath = '//form[@class="form-horizontal"]';
        this.radioExtistingAddressXpath =
            '//input[@name="shipping_address" and @value="existing"]';
        this.buttonContinueXpath = '//input[@id="button-shipping-address"]';
    }

    async fillDeliveryDetailsForm() {
        let form = await browser.$(this.formDeliveryDetailsXpath);
        let radioExistingAddress = await form.$(
            this.radioExtistingAddressXpath
        );
        await form.waitUntil(elementToBeClickable(radioExistingAddress));
        await radioExistingAddress.click();

        let buttonContinue = await form.$(this.buttonContinueXpath);
        await form.waitUntil(elementToBeClickable(buttonContinue));
        await buttonContinue.click();
    }
}

export let deliveryDetailsPage = new DeliveryDetailsPage();
