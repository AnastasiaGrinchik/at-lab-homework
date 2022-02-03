import { elementToBeClickable } from 'wdio-wait-for';
import { AwesomeShopHomePage } from './AwesomeShopHomePage';

export class AccountPage extends AwesomeShopHomePage {
    constructor() {
        super();
        this.buttonHomePage =
            '//a[@href="https://awesome-shop.ru/index.php?route=common/home"]';
    }

    async goToHomePage() {
        let homePageIcon = await browser.$(this.buttonHomePage);
        await browser.waitUntil(elementToBeClickable(homePageIcon));
        await homePageIcon.click();
    }
}
export let Account = new AccountPage();
