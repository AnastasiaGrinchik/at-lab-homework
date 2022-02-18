import '@babel/polyfill';
import {
  awesomeShopHomePage,
  logInPage,
  accountPage,
  productOptionsPage,
  consiceShoppingCartOverviewPage,
  fullShoppingCartOverviewPage,
  billingDetailsPage,
  deliveryDetailsPage,
  deliveryMethodPage,
  paymentMethodPage,
  confirmOrderPage,
  messageAboutOrderPage,
  orderHistoryPage,
  basicPage
} from '../../pageObject_model/index.js';

describe('Checkout', function () {
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
    await fullShoppingCartOverviewPage.checkoutOrder();
    await billingDetailsPage.fillBillingDetailsForm();
    await deliveryDetailsPage.fillDeliveryDetailsForm();
    await deliveryMethodPage.fillDeliveryMethod('The comment added');
    await paymentMethodPage.fillPaymentMethod();
    await confirmOrderPage.fillPaymentMethod();
    await messageAboutOrderPage.fillPaymentMethod();
    await orderHistoryPage.fillPaymentMethod();
  });
  afterAll(async function () {
    await basicPage.closeBrowser();
  });

  it('After placing an order, a success message appears', function () {
    expect(messageAboutOrderPage.messageText).toContain('Your order has been placed!');
  });
  it('After placing an order, it is saved in the order history', function () {
    expect(typeof orderHistoryPage.orderContent).toEqual('string');
    expect(orderHistoryPage.orderContent).not.toEqual('');
  });
});
