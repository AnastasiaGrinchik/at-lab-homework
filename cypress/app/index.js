require('cypress-xpath');

export function goToHomePage() {
  cy.visit('/');
}

export function logIn(object) {
  cy.xpath('//a[contains(text(), "My Account")]').click();
  cy.xpath('//form[@action="https://awesome-shop.ru/index.php?route=account/login"]').within(() => {
    const email = cy.get('#input-email');
    email.type(object.email);
    const password = cy.get('#input-password');
    password.type(object.password);
    cy.xpath('//input[@value="Login"]').click();
  });
}

export function fillInput(inputElement, value) {
  cy.get(inputElement).type(value);
}

export function fillSelect(inputElement, value) {
  cy.get(inputElement).select(value);
}

export function fillAndSendFormProduct(object) {
  cy.xpath('//div[@class="caption"]//a[contains(text(), "Apple Cinema 30")]').click();
  cy.get('#product').within(() => {
    const sizeRadioGroup = cy.get('#input-option218');
    const mediumRadioItem = sizeRadioGroup.contains('Medium');
    mediumRadioItem.click();
    cy.get('#input-option223').within(() => {
      const checkboxThree = cy.contains('Checkbox 3 (+$36.00)');
      checkboxThree.click();
      const checkboxFour = cy.contains('Checkbox 4 (+$48.00)');
      checkboxFour.click();
    });
    fillInput('#input-option208', object.text);
    const colorSelectGroup = cy.get('#input-option217');
    colorSelectGroup.select('1');
    fillInput('#input-option209', object.textarea);
    const quantityProduct = cy.get('#input-quantity');
    quantityProduct.clear().type('4');
    const addToCartButton = cy.get('#button-cart');
    addToCartButton.click();
  });
}

export function goToCart() {
  cy.get('#cart').click();
  const viewCartButton = cy.xpath('//ul[@class="dropdown-menu pull-right"]//a[contains(text(), "View Cart")]');
  viewCartButton.click();
}

export function applyCoupon() {
  cy.get('#content').within(() => {
    const openCouponButton = cy.xpath('//a[contains(text(), "Use Coupon Code ")]');
    openCouponButton.click();
    const couponInput = cy.get('#input-coupon');
    couponInput.type('LuckyUser');
    const applyCouponButton = cy.get('#button-coupon');
    applyCouponButton.click();
  });
}

export function checkout() {
  const checkoutButton = cy.xpath('//div[@class="buttons clearfix"]//a[@href="https://awesome-shop.ru/index.php?route=checkout/checkout"]');
  checkoutButton.click();
}

export function fillBillingDetailsForm(object) {
  cy.xpath('//input[@value="new"]').click();
  fillInput('#input-payment-firstname', object.firstname);
  fillInput('#input-payment-lastname', object.lastname);
  fillInput('#input-payment-address-1', object.address);
  fillInput('#input-payment-city', object.city);
  fillSelect('#input-payment-country', object.country);
  fillSelect('#input-payment-zone', object.region);
  cy.get('#button-payment-address').click();
  cy.xpath('//input[@name="shipping_address" and @value="existing"]').click();
  cy.get('#button-shipping-address').click();
}

export function fillShippingForm(data) {
  cy.xpath('//textarea[@name="comment"]').type(data);
  cy.get('#button-shipping-method').click();
}

export function fillPaymentForm() {
  cy.xpath('//input[@name="payment_method" and @value="cod"]').click();
  cy.xpath('//input[@type="checkbox" and @name="agree"]').click();
  cy.get('#button-payment-method').click();
  cy.get('#button-confirm').click();
}
