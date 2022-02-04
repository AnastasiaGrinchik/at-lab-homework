import { elementToBeClickable } from 'wdio-wait-for';
import { BasicPage } from './BasicPage.js';
export class DeliveryMethodPage extends BasicPage {
  constructor() {
    super();
    this.formXpath = '//form[@class="form-horizontal"]';
    this.textareaXpath = '//textarea[@name="comment"]';
    this.buttonContinueXpath = '//input[@id="button-shipping-method"]';
  }

  async fillDeliveryMethod(comment) {
    let form = await browser.$(this.formXpath);
    let textareaComment = await form.$(this.textareaXpath);
    await form.waitUntil(elementToBeClickable(textareaComment));
    await textareaComment.setValue(comment);

    let buttonContinue = await form.$(this.buttonContinueXpath);
    await form.waitUntil(elementToBeClickable(buttonContinue));
    await buttonContinue.click();
  }
}

export let deliveryMethodPage = new DeliveryMethodPage();
