import { Given, When, Then } from "@cucumber/cucumber";
import { expect, _android } from "@playwright/test";
var {setDefaultTimeout} = require('@cucumber/cucumber'); setDefaultTimeout(60 * 1000);

// Show all writers 
Given('User Open The Rokomari Website', async function () {
    await global.page.goto('https://www.rokomari.com/book');
});
Then('After Open website Click Cross Button Of Add', async ()=> {
    await global.page.locator('(//i[@class="ion-close-round"])[2]').click()
})
Then('Click On The Book Button', async () => {
    await global.page.locator('(//a[contains(text(), "বই")])[1]').click()
})
Then('Click On The Author Button', async () => {
    await global.page.locator('(//a[contains(text(), "লেখক ")])').click()
})
Then('Verify The Famous Authors Are Available', async () => {
    await expect(global.page.locator('//h1[contains(text(), "জনপ্রিয় লেখকগণ")]')).toHaveText('জনপ্রিয় লেখকগণ');
})

// Search you favorite Author 

When('Search your favorite author and see details', async(dataTable) => {
    const data = dataTable.rowsHash()
    await global.page.locator('//input[@id="authorsearch"]').fill(data.favorite_author)
    await global.page.locator('//input[@id="authorsearch"]').press(data.press);
})
Then('Dr. Khandaker Abdullah Jahangir Author Details Is Available', async()=> {
    await expect(global.page.locator('(//*[contains(text(), "ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর")])[1]')).toHaveText('ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর')
    await global.page.locator('(//*[contains(text(), "ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর")])[1]').click()
})
