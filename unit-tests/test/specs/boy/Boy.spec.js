import { expect } from 'chai';
import { Boy } from '../../../app/Boy.js';
import { Girl } from '../../../app/Girl.js';

describe('Class Boy', function () {
    let boyMisha;
    let boyPaul;
    let boyIvan;
    let boyMax;
    let boyOleg;
    let boyAlex;
    let girlDasha;
    let girlAnn;
    describe('Should have getters and setters:', function () {
        before(function () {
            boyMisha = new Boy('september', 5000);
        });
        after(function () {
            boyMisha = null;
        });
        it('Getter for properties birthdayMonth', function () {
            expect(boyMisha.birthdayMonth).to.be.equal('september');
        });
        it('Getter for properties wealth', function () {
            expect(boyMisha.wealth).to.be.equal(5000);
        });
        it('Setter for the properties of birth month', function () {
            expect((boyMisha.birthdayMonth = 'november')).to.be.equal(
                'november'
            );
        });
        it('Setter for the properties of wealth ', function () {
            expect((boyMisha.wealth = 150000)).to.be.equal(150000);
        });
        it('Setter for the properties of girlfriend', function () {
            expect((boyMisha.girlFriend = 'Dasha')).to.be.equal('Dasha');
        });
        it('Getter for properties girlfriend', function () {
            expect(boyMisha.girlFriend).to.be.equal('Dasha');
        });
    });
    describe('Should have method isReach(), which', function () {
        before(function () {
            boyMisha = new Boy('september', 5000);
            boyPaul = new Boy('sempember', 150000);
        });
        after(function () {
            boyMisha = null;
            boyPaul = null;
        });
        it('Should return true if wealth > 100000', function () {
            expect(boyPaul.isRich()).to.be.equal(true);
        });
        it('Should return false if wealth < 100000', function () {
            expect(boyMisha.isRich()).to.be.equal(false);
        });

        // This suite test passes. But it's better to remove the underscore and replace "100_000" with "100000".
    });

    describe('Should have method isPrettyGirlFriend(), which', function () {
        before(function () {
            boyMisha = new Boy('september', 5000);
            boyPaul = new Boy('sempember', 150000);
            girlDasha = new Girl(true, true);
            girlAnn = new Girl(false, true);
            boyMisha.girlFriend = girlDasha;
            boyPaul.girlFriend = girlAnn;
        });
        after(function () {
            boyMisha = null;
            boyPaul = null;
            girlDasha = null;
            girlAnn = null;
        });
        it('Should return true if girlfriend is pretty', function () {
            expect(boyMisha.isPrettyGirlFriend()).to.be.equal(true);
        });
        it('Should return false if girlfriend is not pretty', function () {
            expect(boyPaul.isPrettyGirlFriend()).to.be.equal(false);
        });

        // Works, but it's better to remove the question mark and replace the code with:
        // isPrettyGirlfriend() {
        //     return this.girlFriend?.isPretty;
        // }
    });

    describe('Should have method isSummerMounth(), which', function () {
        before(function () {
            boyMisha = new Boy('june', 5000);
            boyPaul = new Boy('july', 5000);
            boyIvan = new Boy('august', 5000);
            boyMax = new Boy('november', 5000);
        });
        after(function () {
            boyMisha = null;
            boyPaul = null;
            boyIvan = null;
            boyMax = null;
        });
        it('Should return true if boy`s birth mouth is june', function () {
            expect(boyMisha.isSummerMonth()).to.be.equal(true);
        });
        it('Should return true if boy`s birth mouth is july', function () {
            expect(boyPaul.isSummerMonth()).to.be.equal(true);
        });
        it('Should return true if boy`s birth mouth is august', function () {
            expect(boyIvan.isSummerMonth()).to.be.equal(true);
        });
        it('Should return true if boy`s birth mouth is november', function () {
            expect(boyMax.isSummerMonth()).to.be.equal(false);
        });

        // The function cannot be executed:
        // 1. The typo this.birthdayMonth.toLowerCase() should be replaced with this.birthdayMonth.toUpperCase().
        // 2. Instead of the && operator, put the operator || .
        // isSummerMonth() {
        //     return (
        //         this.birthdayMonth.toUpperCase() === 'JUNE' ||
        //         (this.birthdayMonth.toUpperCase() === 'JULY' ||
        //             this.birthdayMonth.toUpperCase() === 'AUGUST')
        //     );
        // }
    });
    describe('Should have method spendSomeMoney(amountForSpending), which', function () {
        before(function () {
            boyMisha = new Boy('june', 5000);
        });
        after(function () {
            boyMisha = null;
        });
        it('Should must return the correct amount of the remaining money if amountForSpending <= boys.wealth ', function () {
            expect(boyMisha.spendSomeMoney(100)).to.be.equal(4900);
        });
        it('Should throw error if amountForSpending > boys.wealth ', function () {
            expect(() => boyMisha.spendSomeMoney(6000)).to.throw(
                `Not enough money! Requested amount is`
            );
        });

        // Here you need to remove the brackets when calling the geter: if (amountForSpending <= this.wealth).
        // Here you need to subtract expenses from the total amount that the boy has, and not add. You also need a function to return something.
        // Need result in precondition:
        // spendSomeMoney(amountForSpending) {
        //     if (amountForSpending <= this.wealth) {
        //         return this.wealth -= amountForSpending;
        //     } else {
        //         throw new Error(
        //             `Not enough money! Requested amount is ${amountForSpending}, but you can't spend more then ${this.wealth}`
        //         );
        //     }
        // }
    });
    describe('Should have method getMood(), which', function () {
        before(function () {
            boyMisha = new Boy('june', 150000);
            boyPaul = new Boy('september', 20);
            boyIvan = new Boy('july', 1);
            boyOleg = new Boy('december', 2000000);
            boyMax = new Boy('december', 1);
            boyAlex = new Boy('novermer', 200000);
            girlDasha = new Girl(true, true);
            girlAnn = new Girl(false, false);
            boyMisha.girlFriend = girlDasha;
            boyPaul.girlFriend = girlDasha;
            boyMax.girlFriend = girlAnn;
            boyAlex.girlFriend = girlDasha;
            boyIvan.girlFriend = girlAnn;
            boyOleg.girlFriend = girlAnn;
        });
        after(function () {
            boyMisha = null;
            boyPaul = null;
            boyIvan = null;
            boyOleg = null;
            boyMax = null;
            boyAlex = null;
            girlDasha = null;
            girlAnn = null;
        });
        it('Should return EXCELLENT if isRich() returns true, isPrettyGirlFriend() returns true, isSummerMonth() returns true', function () {
            expect(boyMisha.getMood()).to.be.equal('EXCELLENT');
        });
        it('Should return GOOD if isRich() returns true', function () {
            expect(boyOleg.getMood()).to.be.equal('NEUTRAL');
        });
        it('Should return GOOD if isPrettyGirlFriend() returns true', function () {
            expect(boyPaul.getMood()).to.be.equal('NEUTRAL');
        });
        it('Should return GOOD if isSummerMonth() returns true', function () {
            expect(boyIvan.getMood()).to.be.equal('NEUTRAL');
        });
        it('Should return NEUTRAL if isPrettyGirlFriend() returns true and isReach() returns true', function () {
            expect(boyAlex.getMood()).to.be.equal('GOOD');
        });
        it('Should return BAD if isSummerMonth() returns false, isRich() returns false, isPrettyGirlFriend() returns false', function () {
            expect(boyMax.getMood()).to.be.equal('BAD');
        });
    });

    // You need to swap 2 conditions. Else if (this.isRich() && this.isPrettyGirlFriend()) should be checked first, and then if (
    //     this.isRich() ||
    //           this.isSummerMonth() ||
    //           this.isPrettyGirlFriend()
    //       )
    // In the same order as in the source code, then if (
    //     this.isRich() ||
    //           this.isSummerMonth() ||
    //           this.isPrettyGirlFriend()
    //       ) if any of this returns true, then the conditions described below will no longer be checked.
    // As a result, the code should be replaced with the following:
    // getMood() {
    //     if (
    //         this.isRich() &&
    //         this.isPrettyGirlFriend() &&
    //         this.isSummerMonth()
    //     ) {
    //         return 'EXCELLENT';
    //     } else if (this.isRich() && this.isPrettyGirlFriend()) {
    //         return 'GOOD';
    //     } else if (
    //         this.isRich() ||
    //         this.isSummerMonth() ||
    //         this.isPrettyGirlFriend()
    //     ) {
    //         return 'NEUTRAL';
    //     } else {
    //         return 'BAD';
    //     }
    // }
    // Also, all the functions affected in the code must be working (about what is wrong in them is written above in the comments)
});
