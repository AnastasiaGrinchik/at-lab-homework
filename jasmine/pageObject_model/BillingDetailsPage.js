import { elementToBeClickable, visibilityOf } from 'wdio-wait-for';
import { BasicPage } from './BasicPage';
export class BillingDetailsPage extends BasicPage {
    constructor() {
        super();
        this.formXpath = '//form[@class="form-horizontal"]';
        this.firstNameXpath = '//input[@name="firstname"]';
        this.lastNameXpath = '//input[@name="lastname"]';
        this.addressFirstXpath = '//input[@name="address_1"]';
        this.cityXpath = '//input[@name="city"]';
        this.countrySelectXpath = '//select[@name="country_id"]';
        this.countryOptionXpath = '//option[contains(text(), "Belarus")]';
        this.regionSelectXpath = '//select[@name="zone_id"]';
        this.regionOptionXpath = '//option[@value="339"]';
        this.buttonContinueXpath = '//input[@id="button-payment-address"]';
        this.radioNewAddressXpath = '//input[@value="new"]';
    }

    async chooseNewAdress() {
        let form = await browser.$(this.formXpath);
        let radioNewAddress = form.$(this.radioNewAddressXpath);
        await form.waitUntil(elementToBeClickable(radioNewAddress));
        await radioNewAddress.click();
    }

    async fillData() {
        let form = await browser.$(this.formXpath);
        let firstName = await form.$(this.firstNameXpath);
        await firstName.setValue('Nastassia');

        let lastName = await form.$(this.lastNameXpath);
        await lastName.setValue('Hrynchyk');

        let firstAddress = await form.$(this.addressFirstXpath);
        await firstAddress.setValue('Rokossovskogo 60/1');

        let city = await form.$(this.cityXpath);
        await city.setValue('Minsk');

        let regionSelect = await form.$(this.regionSelectXpath);
        await form.waitUntil(elementToBeClickable(regionSelect));
        await regionSelect.click();
        let regionItem = await form.$(this.regionOptionXpath);
        await form.waitUntil(visibilityOf(regionItem));
        await regionItem.click();

        let buttonContinue = await form.$(this.buttonContinueXpath);
        await form.waitUntil(elementToBeClickable(buttonContinue));
        await buttonContinue.click();
    }

    async fillBillingDetailsForm() {
        await this.chooseNewAdress();
        await this.fillData();
    }
}

export let BillingDetails = new BillingDetailsPage();
