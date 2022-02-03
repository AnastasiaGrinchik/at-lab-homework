import '@babel/polyfill';
import { expect } from 'chai';
import {
    AwesomeShopHome,
    ProductOptionsForm,
    ConsiceCartOverview,
    FullCartOverview,
    BasicDriver,
} from '../../pageObject_model/index.js';

describe('A product added with certain options to the cart. ', function () {
    before(async function () {
        await AwesomeShopHome.openPage(AwesomeShopHome.urlAwesomeHome);
        await AwesomeShopHome.openProductPage(AwesomeShopHome.appleCinema30);
        await ProductOptionsForm.fillForm();
        await AwesomeShopHome.openConsiceOverviewCard();
        await ConsiceCartOverview.viewCart();
        await FullCartOverview.getProductOptions();
    });
    after(async function () {
        await BasicDriver.closeBrowser();
    });

    it('Saved the text "Radio Medium" in the "Radio" option', function () {
        expect(FullCartOverview.productRadioContent).to.be.equal(
            'Radio: Medium'
        );
    });

    it('Saved the text "Checkbox: Checkbox 2" in the first "Checkbox" option', function () {
        expect(FullCartOverview.productFirstCheckboxContent).to.be.equal(
            'Checkbox: Checkbox 2'
        );
    });

    it('Saved the text "Checkbox: Checkbox 4" in the second "Checkbox" option', function () {
        expect(FullCartOverview.productSecondCheckboxContent).to.be.equal(
            'Checkbox: Checkbox 4'
        );
    });

    it('Saved the text "Text: Apple Cinema 30" in the "Text" option', function () {
        expect(FullCartOverview.productTextContent).to.be.equal(
            'Text: Apple Cinema 30'
        );
    });

    it('Saved the text "Select: Green" in the "Select" option', function () {
        expect(FullCartOverview.productSelectContent).to.be.equal(
            'Select: Green'
        );
    });

    it('Saved the text "Textarea: I really want to buy.." in the "Textarea" option', function () {
        expect(FullCartOverview.productTextareaContent).to.be.equal(
            'Textarea: I really want to buy..'
        );
    });

    it('The discount corresponds to 20%, which is "$102.60" of the total amount.', function () {
        expect(FullCartOverview.resultSumOfVat).to.be.equal('$102.60');
    });
});
