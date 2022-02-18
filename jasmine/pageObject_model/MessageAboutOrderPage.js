import { elementToBeClickable, visibilityOf } from 'wdio-wait-for';
import { BasicPage } from './BasicPage.js';
export class MessageAboutOrderPage extends BasicPage {
  constructor() {
    super();
    this.messageContentXpath = '//div[@id="common-success"]';
    this.messageTextXpath = '//div[@id="content"]/h1';
    this.buttonHistoryXpath = '//a[contains(text(), "history")]';
  }

  async fillPaymentMethod() {
    await browser.waitUntil(visibilityOf(this.messageContentXpath));
    let message = await browser.$(this.messageContentXpath);
    let messageText = await message.$(this.messageTextXpath);
    this.messageText = await messageText.getText();

    let buttonHistory = await message.$(this.buttonHistoryXpath);
    await message.waitUntil(elementToBeClickable(buttonHistory));
    await buttonHistory.click();
  }
}
export let messageAboutOrderPage = new MessageAboutOrderPage();
