import { Given, When, Then } from "@cucumber/cucumber";
import { expect, _android } from "@playwright/test";
var {setDefaultTimeout} = require('@cucumber/cucumber'); setDefaultTimeout(60 * 1000);

// SignUp Rokomari Website

Given('User Open Rokomari Website', async function () {
    await global.page.goto('https://www.rokomari.com/book');
});
Then('Click Cross Button Of Add', async ()=> {
  await global.page.locator('(//i[@class="ion-close-round"])[2]').click()
})
Then('Click On Sign In Button', async()=> {
  await global.page.locator('//a[contains(text(), "Sign in")]').click();
})
Then('Click On Sign UP Button', async()=> {
  await global.page.locator('//p[contains(text(), "Sign up")]').click();
})

Then('Enter users informations:', async(dataTable)=> {
  const data = dataTable.rowsHash()
  await global.page.locator('#nm').fill(data.full_name)
  await global.page.locator("#js-email").fill(data.email)
  await global.page.locator('(//input[@id="js-phone"])').fill(data.mobile)
  await global.page.locator("#pwd").fill(data.password)
})
Then('Select The Re-Captcha Check Box', async()=> {
  await global.page.locator('(//div[@role="presentation"]/..)[1]').click({force: true})
})
Then('Click On The Create Account Button', async ()=> {
  await global.page.locator('//button[contains(text(), "Create Account")]').click()
})
