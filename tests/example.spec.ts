import { test, expect, } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

await page.goto("www.google.com");
});
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


 test("alerts in the frame", async({page})=>{
 
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");


page.on("dialog", dialog=>{
    expect(dialog.type()).toEqual("Alert");
    expect(dialog.message()).toEqual("I am a JS Alert")
    dialog.accept();

  })

   // await page.getByRole('button', { name: 'Click for JS Alert' }).click()

    //await expect(page.locator("#result")).toHaveText("You successfully clicke");
 })

 
 
 test("Handle Iframe with Name", async({page})=>{
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form");

    const framess= page.frame("iframeResult")
    await framess?.locator("#fname").fill("sandeep automation")




 })