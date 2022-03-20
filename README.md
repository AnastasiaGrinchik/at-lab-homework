## Task 1. Unit testing
1. Copy Boy.js and Girl.js into your unit testing homework folder.
2. Cover all the methods from these classes with unit tests without changing the contents of the classes.
3. Find as many bugs as possible with your unit tests. Define the criteria of bugs by logic, life experience and common sense :)
4. Above all lines with bugs add comments describing what the bug was about.
5. Make a coverage report via nyc.
5. Choose one of two libraries for unit tests: Mocha/Chai or Jasmine.

## Task 2. Simple automation scripts
1. Scenario for WDIO + Mocha
2. Open https://awesome-shop.ru/
3. Click Apple Cinema 30" item
4. Select Medium in Radio option
5. Select Checkbox 2 and 4 in Checkbox option
6. Paste some short quote (up to 4 words) in Text option
7. Select Green option in Dropdown Select
8. Paste some long quote (up to 40 words) in TextArea option
9. Set quantity 3 
10. Click “Add to cart” button
11. Click Shopping cart icon at the top of the page
12. Click “View Cart” button
13. Assert that selected options are applied
14. Assert that VAT 20% is calculated correctly
15. Don’t forget to close the browser :)

## Scenario for WDIO + Jasmine
Pre-condition: You have a Registered User on E-shop https://awesome-shop.ru/ (do it on your own before scripting test).
1. Open https://awesome-shop.ru/
2. Login with your User from Pre-condition
3. Return to the home page
4. Click iPhone item
5. Set quantity 7 and click “Add to cart” button
6. Click Shopping cart icon at the top of the page
7. Click “View Cart” button
8. Open toggle “Use Coupon Code”
9. Apply coupon LuckyUser (note: coupon code is case-sensitive)
10. Assert that 15% discount was applied
11. Assert that message “Success: Your coupon discount has been applied!” was appeared
12. Click “Checkout” button
13. In Step 2: Billing Details select option “I want to use a new address”, fill mandatory fields and click “Continue” button
14. In Step 3: Delivery Details select option “I want to use an existing address” and click “Continue” button
15. In Step 4: Delivery Method fill some comment and click “Continue” button
16. In step Step 5: Payment Method click checkbox “I have read and agree to the Terms & Conditions” and click “Continue” button
17. In Step 6: Confirm Order click “Confirm Order” button
18. Assert that successful message of order placing is exist
19. Assert that order is exist in order history of current user
20. Don’t forget to close the browser :)

## Cypress(without Page Object Models!)


