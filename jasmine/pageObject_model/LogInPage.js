import { elementToBeClickable } from 'wdio-wait-for';
import { AwesomeShopHomePage } from './AwesomeShopHomePage.js';
export class LogInPage extends AwesomeShopHomePage {
  constructor() {
    super();
    this.logInFormXpath = '//form[@action="https://awesome-shop.ru/index.php?route=account/login"]';
    this.userEmailXpath = '//input[@name="email"]';
    this.userPasswordXpath = '//input[@name="password"]';
    this.buttonLogInXpath = '//input[@type="submit" and @value="Login"]';
  }

  async signIn(email, password) {
    let form = await browser.$(this.logInFormXpath);
    let inputEmail = await form.$(this.userEmailXpath);
    await inputEmail.setValue(email);
    let inputPassword = await form.$(this.userPasswordXpath);
    await inputPassword.setValue(password);

    let buttonLogIn = form.$(this.buttonLogInXpath);
    await form.waitUntil(elementToBeClickable(buttonLogIn));
    await buttonLogIn.click();
  }
}

export let logInPage = new LogInPage();
