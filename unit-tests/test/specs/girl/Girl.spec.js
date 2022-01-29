import { expect } from 'chai';
import { Girl } from './../../../app/Girl.js';
import { Boy } from './../../../app/Boy.js';

describe('Class Girl ', function () {
    let girlDasha;
    let girlAnn;
    let girlNatasha;
    let girlMasha;
    let girlKate;
    let boyMisha;
    let boyPaul;
    let boyAlex;
    describe('Should have getters and setters:', function () {
        before(function () {
            girlDasha = new Girl(true, true);
        });
        after(function () {
            girlDasha = null;
        });
        it('Getter for properties isPretty', function () {
            expect(girlDasha.isPretty).to.be.equal(true);
        });
        it('Getter for properties isSlimFriendGotAFewKilos', function () {
            expect(girlDasha.isSlimFriendGotAFewKilos).to.be.equal(true);
        });
        it('Setter for properties isPretty', function () {
            expect((girlDasha.isPretty = false)).to.be.equal(false);
        });
        it('Setter for properties isSlimFriendGotAFewKilos', function () {
            expect((girlDasha.isSlimFriendGotAFewKilos = false)).to.be.equal(
                false
            );
        });
        it('Setter for properties boyFriend', function () {
            expect((girlDasha.boyFriend = 'Ann')).to.be.equal('Ann');
        });
        it('Getter for properties boyFriend', function () {
            expect(girlDasha.boyFriend).to.be.equal('Ann');
        });
    });

    describe('Should have method isBoyfriendRich(), which', function () {
        before(function () {
            girlDasha = new Girl(true, true);
            girlAnn = new Girl(true, true);
            boyMisha = new Boy('september', 500000);
            boyPaul = new Boy('september', 10);
            girlDasha.boyFriend = boyMisha;
            girlAnn.boyFriend = boyPaul;
        });
        after(function () {
            girlDasha = null;
            girlAnn = null;
            boyMisha = null;
            boyPaul = null;
        });
        it('Should return true if boyfriend.isRich() returns true', function () {
            expect(girlDasha.isBoyfriendRich()).to.be.equal(true);
        });
        it('Should return true if boyfriend.isRich() returns false', function () {
            expect(girlAnn.isBoyfriendRich()).to.be.equal(false);
        });

        // You need to remove the "!". Otherwise, the function does not make sense. If the boyfriend is rich, then it will return that he is not rich, although
        //  he is rich. And it is better to remove the question mark, although it will work with it. The code should be replaced with:
        // isBoyfriendRich() {
        //         return this.boyFriend.isRich();
        // }
    });

    describe('Should have method isBoyFriendWillBuyNewShoes(), which', function () {
        before(function () {
            girlDasha = new Girl(true, true);
            girlAnn = new Girl(true, true);
            girlNatasha = new Girl(false, false);
            girlMasha = new Girl(false, false);
            boyMisha = new Boy('september', 500000);
            boyPaul = new Boy('september', 10);
            girlDasha.boyFriend = boyMisha;
            girlAnn.boyFriend = boyPaul;
            girlNatasha.boyFriend = boyMisha;
            girlMasha.boyFriend = boyPaul;
        });
        after(function () {
            girlDasha = null;
            girlAnn = null;
            girlNatasha = null;
            girlMasha = null;
            boyMisha = null;
            boyPaul = null;
        });
        it('Should return true  if isPretty() returns true, isBoyfriendRich() returns true', function () {
            expect(girlDasha.isBoyFriendWillBuyNewShoes()).to.be.equal(true);
        });
        it('Should return false  if isPretty() returns true, isBoyfriendRich() returns false', function () {
            expect(girlAnn.isBoyFriendWillBuyNewShoes()).to.be.equal(false);
        });
        it('Should return false  if isPretty() returns false, isBoyfriendRich() returns true', function () {
            expect(girlNatasha.isBoyFriendWillBuyNewShoes()).to.be.equal(false);
        });
        it('Should return false  if isPretty() returns false isBoyfriendRich() returns false', function () {
            expect(girlMasha.isBoyFriendWillBuyNewShoes()).to.be.equal(false);
        });

        // If the changes described above in the isBoyfriendRich() function are made, then the tests will pass.
    });

    describe('Should have method spendBoyFriendMoney(amountForSpending), which', function () {
        before(function () {
            girlDasha = new Girl(true, true);
            girlAnn = new Girl(true, true);
            girlMasha = new Girl(true, true);
            boyMisha = new Boy('september', 150000);
            boyPaul = new Boy('september', 10);
            boyAlex = new Boy('semperber', 180000);
            girlDasha.boyFriend = boyMisha;
            girlMasha.boyFriend = boyAlex;
            girlAnn.boyFriend = boyPaul;
        });
        after(function () {
            girlDasha = null;
            girlAnn = null;
            girlMasha = null;
            boyMisha = null;
            boyPaul = null;
            boyAlex = null;
        });
        it('Should throw rigth sum of money if boyfriend.wealth > amountForSpending', function () {
            expect(girlDasha.spendBoyFriendMoney(5000)).to.be.equal(145000);
        });
        it('Should return undefined is isReach() returns false', function () {
            expect(girlAnn.spendBoyFriendMoney(1000)).to.be.equal(undefined);
        });
        it('Should return undefined if boy isReach() returns false', function () {
            expect(girlAnn.spendBoyFriendMoney(50000)).to.be.equal(undefined);
        });

        // You need to add "return":
        // spendBoyFriendMoney(amountForSpending) {
        //     if (this.isBoyfriendRich()) {
        //         return this.boyFriend.spendSomeMoney(amountForSpending);
        //     }
        // }
    });
    describe('Should have method getMood(), which', function () {
        before(function () {
            girlDasha = new Girl(true, true);
            girlAnn = new Girl(false, false);
            girlMasha = new Girl(true, false);
            girlNatasha = new Girl(false, true);
            girlKate = new Girl(false, false);
            boyMisha = new Boy('september', 150000);
            boyPaul = new Boy('september', 10);
            boyAlex = new Boy('semperber', 180000);
            girlDasha.boyFriend = boyMisha;
            girlMasha.boyFriend = boyPaul;
            girlAnn.boyFriend = boyAlex;
            girlKate.boyFriend = boyPaul;
            girlNatasha.boyFriend = boyPaul;
        });
        after(function () {
            girlDasha = null;
            girlAnn = null;
            girlMasha = null;
            girlNatasha = null;
            girlKate = null;
            boyMisha = null;
            boyPaul = null;
            boyAlex = null;
        });
        it('Should return EXCELLENT if isBoyFriendWillBuyNewShoes() returns true and girl.isPretty() returns true', function () {
            expect(girlDasha.getMood()).to.be.equal('EXCELLENT');
        });
        it('Should return GOOD if isPretty() returns true', function () {
            expect(girlMasha.getMood()).to.be.equal('GOOD');
        });
        it('Should return GOOD if isBoyfriendRich() returns true', function () {
            expect(girlAnn.getMood()).to.be.equal('GOOD');
        });
        it('Should return NEUTRAL if isSlimFriendBecameFat() returns true', function () {
            expect(girlNatasha.getMood()).to.be.equal('NEUTRAL');
        });
        it('Should return BAD if isBoyfriendRich() returns false && isPretty() returns false && isBoyFriendWillBuyNewShoes() returns false && isSlimFriendBecameFat() returns false', function () {
            expect(girlKate.getMood()).to.be.equal('BAD');
        });

        // There is no logic in (!this.isBoyFriendWillBuyNewShoes()). It turns out that if the boyfriend does NOT buy new shoes, then the mood will be excellent.
        // Here it is necessary to remove the "!" before the this.isBoyFriendWillBuyNewShoes() function.
        // this.isPretty() is a getter so the parentheses are not needed.
        // isSlimFriendBecameFat() contains the condition this.isSlimFriendGotAFewKilos() && !this.isPretty, where this.isSlimFriendGotAFewKilos() is a getter,
        // you need to remove the parentheses.
        // Result in should be:
        // getMood() {
        //     if (this.isBoyFriendWillBuyNewShoes()) {
        //         return 'EXCELLENT';
        //     } else if (this.isPretty || this.isBoyfriendRich()) {
        //         return 'GOOD';
        //     } else if (this.isSlimFriendBecameFat()) {
        //         return 'NEUTRAL';
        //     } else {
        //         return 'BAD';
        //     }
        // }
    });

    describe('Should have method isSlimFriendBecameFat(), which', function () {
        before(function () {
            girlDasha = new Girl(false, true);
            girlAnn = new Girl(false, false);
            girlNatasha = new Girl(true, true);
            girlMasha = new Girl(true, false);
        });
        after(function () {
            girlDasha = null;
            girlAnn = null;
            girlNatasha = null;
            girlMasha = null;
        });
        it('Should return true  if !(isPretty()) === true, isSlimFriendGotAFewKilos()) returns true', function () {
            expect(girlDasha.isSlimFriendBecameFat()).to.be.equal(true);
        });
        it('Should return false if !(isPretty()) === true, isSlimFriendGotAFewKilos()) returns false', function () {
            expect(girlAnn.isSlimFriendBecameFat()).to.be.equal(false);
        });
        it('Should return false  if !(isPretty()) === false, isSlimFriendGotAFewKilos()) returns true', function () {
            expect(girlNatasha.isSlimFriendBecameFat()).to.be.equal(false);
        });
        it('Should return false if !(isPretty()) === false, isSlimFriendGotAFewKilos()) returns false', function () {
            expect(girlMasha.isSlimFriendBecameFat()).to.be.equal(false);
        });
        // isSlimFriendBecameFat() contains the condition this.isSlimFriendGotAFewKilos() && !this.isPretty, where this.isSlimFriendGotAFewKilos() is a getter,
        // you need to remove the parentheses. Result in:
        // isSlimFriendBecameFat() {
        //     return this.isSlimFriendGotAFewKilos && !this.isPretty;
        // }
    });
});
