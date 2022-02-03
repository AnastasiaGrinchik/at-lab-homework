import '@babel/polyfill';
import {
    AwesomeShopHome,
    LogIn,
    Account,
    ProductOptionsForm,
    ConsiceCartOverview,
    FullCartOverview,
    BillingDetails,
    DeliveryDetails,
    DeliveryMethod,
    PaymentMethod,
    ConfirmOrder,
    MessageAboutOrder,
    OrderHistory,
    BasicDriver,
} from '../../pageObject_model/index.js';

describe('Checkout', function () {
    beforeAll(async function () {
        await AwesomeShopHome.openPage(AwesomeShopHome.urlAwesomeHome);
        await AwesomeShopHome.goToMyAccount();
        await LogIn.signIn('nastassia_hrynchyk@gmail.com', '1234567890');
        await Account.goToHomePage();
        await AwesomeShopHome.openProductPage(AwesomeShopHome.iphone);
        await ProductOptionsForm.setQuantityOfProduct('7');
        await ProductOptionsForm.addToCart();
        await AwesomeShopHome.openConsiceOverviewCard();
        await ConsiceCartOverview.viewCart();
        await FullCartOverview.checkoutOrder();
        await BillingDetails.fillBillingDetailsForm();
        await DeliveryDetails.fillDeliveryDetailsForm();
        await DeliveryMethod.fillDeliveryMethod('The comment added');
        await PaymentMethod.fillPaymentMethod();
        await ConfirmOrder.fillPaymentMethod();
        await MessageAboutOrder.fillPaymentMethod();
        await OrderHistory.fillPaymentMethod();
    });
    afterAll(async function () {
        await BasicDriver.closeBrowser();
    });

    it('After placing an order, a success message appears', function () {
        expect(MessageAboutOrder.messageText).toContain(
            'Your order has been placed!'
        );
    });
    it('After placing an order, it is saved in the order history', function () {
        expect(typeof OrderHistory.orderContent).toEqual('string');
        expect(OrderHistory.orderContent).not.toEqual('');
    });
});
