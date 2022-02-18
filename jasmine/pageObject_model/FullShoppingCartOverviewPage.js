import { elementToBeClickable } from 'wdio-wait-for';
import { AwesomeShopHomePage } from './AwesomeShopHomePage.js';
export class FullShoppingCartOverviewPage extends AwesomeShopHomePage {
  constructor() {
    super();
    this.contentCartXpath = '//*[@id="content"]';
    this.buttonOpenCouponXpath = '//a[contains(text(), "Use Coupon Code ")]';
    this.inputCouponXpath = '//*[@id="content"]//input[@name="coupon"]';
    this.buttonApplyCouponXpath = '//input[@value="Apply Coupon"]';
    this.messageAboutCouponXpath = '//div[@class="alert alert-success alert-dismissible"]';
    this.couponDiscountXpath =
      '//*[contains(text(), "Coupon (LuckyUser):")]/../following-sibling::td[contains(text(), "$")]';
    this.buttonCheckoutXpath = '//a[@class="btn btn-primary"]';
  }

  async addCoupon(couponText) {
    let contentCart = await browser.$(this.contentCartXpath);
    let coupon = await contentCart.$(this.buttonOpenCouponXpath);
    await browser.waitUntil(elementToBeClickable(coupon));
    await coupon.click();

    let inputCoupon = await contentCart.$(this.inputCouponXpath);
    inputCoupon.setValue(couponText);

    let buttonApllyCoupon = await contentCart.$(this.buttonApplyCouponXpath);
    await contentCart.waitUntil(elementToBeClickable(buttonApllyCoupon));
    await buttonApllyCoupon.click();
  }

  async getInformationAboutCoupon() {
    let contentCart = await browser.$(this.contentCartXpath);
    let message = await contentCart.$(this.messageAboutCouponXpath);
    this.messageAboutCoupon = await message.getText();
    let sumOfDiscountWithCoupon = await contentCart.$(this.couponDiscountXpath);
    this.sumOfDiscountWithCoupon = await sumOfDiscountWithCoupon.getText();
  }

  async checkoutOrder() {
    let contentCart = await browser.$(this.contentCartXpath);
    let buttonCheckout = await contentCart.$(this.buttonCheckoutXpath);
    await contentCart.waitForClickable(elementToBeClickable(buttonCheckout));
    await buttonCheckout.click();
  }
}

export let fullShoppingCartOverviewPage = new FullShoppingCartOverviewPage();
