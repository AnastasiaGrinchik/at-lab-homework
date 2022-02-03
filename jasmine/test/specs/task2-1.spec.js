import '@babel/polyfill';
import {
    AwesomeShopHome,
    LogIn,
    Account,
    ProductOptionsForm,
    ConsiceCartOverview,
    FullCartOverview,
    BasicDriver,
} from '../../pageObject_model/index.js';

describe('Applying a "LuckyUser" Coupon ', function () {
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
        await FullCartOverview.addCoupon('LuckyUser');
        await FullCartOverview.getInformationAboutCoupon();
    });
    afterAll(async function () {
        await BasicDriver.closeBrowser();
    });

    it('Success message appearing after applying a coupon', function () {
        expect(FullCartOverview.messageAboutCoupon).toContain(
            'Success: Your coupon discount has been applied!'
        );
    });
    it('10% discount is considered correct after applying a coupon ', function () {
        expect(FullCartOverview.sumOfDiscountWithCoupon).toEqual('$-106.05');
    });
});
