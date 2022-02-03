import { BasicPage } from './BasicPage';
export class OrderHistoryPage extends BasicPage {
    constructor() {
        super();
        this.messageContentXpath = '//div[@id="account-order"]';
        this.messageTextXpath = '//div[@id="content"]/h1';
        this.orderContentXpath = '//div[@class="table-responsive"]//tbody/tr';
    }

    async fillPaymentMethod() {
        let message = await browser.$(this.messageContentXpath);
        let messageText = await message.$(this.messageTextXpath);
        this.messageText = await messageText.getText();

        let orderContent = await message.$(this.orderContentXpath);
        this.orderContent = await orderContent.getText();
    }
}
export let OrderHistory = new OrderHistoryPage();
