import '@babel/polyfill';
import {
  awesomeShopHomePage,
  logInPage,
  accountPage,
  productOptionsPage,
  consiceShoppingCartOverviewPage,
  fullShoppingCartOverviewPage,
  basicPage
} from '../../pageObject_model/index.js';

describe('Applying a "LuckyUser" Coupon ', function () {
  beforeAll(async function () {
    await awesomeShopHomePage.openPage(awesomeShopHomePage.urlAwesomeHome);
    await awesomeShopHomePage.goToMyaccount();
    await logInPage.signIn('nastassia_hrynchyk@gmail.com', '1234567890');
    await accountPage.goToHomePage();
    await awesomeShopHomePage.openProductPage(awesomeShopHomePage.iphone);
    await productOptionsPage.setQuantityOfProduct('7');
    await productOptionsPage.addToCart();
    await awesomeShopHomePage.openConsiceOverviewCard();
    await consiceShoppingCartOverviewPage.viewCart();
    await fullShoppingCartOverviewPage.addCoupon('LuckyUser');
    await fullShoppingCartOverviewPage.getInformationAboutCoupon();
  });
  afterAll(async function () {
    await basicPage.closeBrowser();
  });

  it('Success message appearing after applying a coupon', function () {
    expect(fullShoppingCartOverviewPage.messageAboutCoupon).toContain(
      'Success: Your coupon discount has been applied!'
    );
  });
  it('10% discount is considered correct after applying a coupon ', function () {
    expect(fullShoppingCartOverviewPage.sumOfDiscountWithCoupon).toEqual(
      '$-106.05'
    );
  });
});
