import {BeforeAll, Before, After, AfterAll} from '@cucumber/cucumber';
import { chromium } from "@playwright/test";


BeforeAll(async() =>{
    global.browser = await chromium.launch({
        // args: ["--start-maximized"],
        headless: false,
        slowMo:400
    })
});

AfterAll(async() => {
    // await global.browser.close();
})

Before(async() => {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
})

After (async() =>{+
    await global.page.close();
})