import { AwesomeShopHomePage } from './AwesomeShopHomePage.js';
export class FullShoppingCartOverview extends AwesomeShopHomePage {
    constructor() {
        super();
        this.contentCartXpath = '//*[@id="content"]';
        this.sumOfVatXpath =
            '//*[contains(text(), "VAT (20%):")]/../following-sibling::td[contains(text(), "$")]';
        this.productRadioXpath = '//small[contains(text(), "Radio")]';
        this.productFirstCheckboxXpath =
            '//small[contains(text(), "Radio")]//following-sibling::small[contains(text(), "Checkbox")]';
        this.productSecondCheckboxXpath =
            '//small[contains(text(), "Radio")]//following-sibling::small[contains(text(), "Checkbox")]//following-sibling::small[contains(text(), "Checkbox")]';
        this.productTextXpath = '//small[contains(text(), "Text")]';
        this.productSelectXpath = '//small[contains(text(), "Select")]';
        this.productTextareaXpath = '//small[contains(text(), "Textarea")]';
    }

    async getProductOptions() {
        let contentCart = await browser.$(this.contentCartXpath);
        let radioContent = await contentCart.$(this.productRadioXpath);
        this.productRadioContent = await radioContent.getText();

        let productFirstCheckboxContent = await contentCart.$(
            this.productFirstCheckboxXpath
        );
        this.productFirstCheckboxContent =
            await productFirstCheckboxContent.getText();

        let productSecondCheckboxContent = await contentCart.$(
            this.productSecondCheckboxXpath
        );
        this.productSecondCheckboxContent =
            await productSecondCheckboxContent.getText();

        let productTextContent = await contentCart.$(this.productTextXpath);
        this.productTextContent = await productTextContent.getText();

        let productSelectContent = await contentCart.$(this.productSelectXpath);
        this.productSelectContent = await productSelectContent.getText();

        let productTextareaContent = await contentCart.$(
            this.productTextareaXpath
        );
        this.productTextareaContent = await productTextareaContent.getText();

        let sumOfVat = await contentCart.$(this.sumOfVatXpath);

        this.resultSumOfVat = await sumOfVat.getText();
    }
}

export let FullCartOverview = new FullShoppingCartOverview();
