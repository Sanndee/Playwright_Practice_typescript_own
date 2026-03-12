import {test, expect } from "@playwright/test";

test("start the website",async({page})=>{

  await  page.goto("https://www.flipkart.com/");
  await  page.getByPlaceholder("Search for Products, Brands and More").pressSequentially("Mobiles");
 const stt =page.getByPlaceholder("Search for Products, Brands and More")
 await stt.dblclick()
 
})


test.only("start the website2",async({page})=>{

  await  page.goto("https://www.bingo.com/");
  await  page.getByPlaceholder("Search for Products, Brands and More").pressSequentially("Mobiles");
 const stt =page.getByPlaceholder("Search for Products, Brands and More")
 await stt.dblclick()
 
})
test("Locators finding",async ({page})=>{

 await page.goto("https://www.saucedemo.com/");
 await page.locator('[data-test="username"]').fill("standard_user");
await page.locator("#password").fill("secret_sauce");
  //page.locator("[class='submit-button btn_action']").click();
await  page.locator('[data-test="login-button"]').click();
await page.locator('[data-test="item-4-img-link"]').click();


//await page.locator('[text="Sauce Labs Backpack")]').click();
//await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//await page.locator("text=Sauce LABS Backpack").click();

//await page.locator("#add-to-cart-sauce-labs-backpack").click();

//await page.getByAltText("Sauce Labs Bike Light").click();
//await expect(page.getByText("Sauce Labs Backpack")).toHaveText("Sauce Labs Backpack")

await page.locator("text=Sauce LABS Backpack").click();
await page.locator('[data-test="add-to-cart"]').click();
await page.locator('[data-test="shopping-cart-link"]').click();
await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText("1")
  await page.locator("#checkout").click(); 
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator("#remove-sauce-labs-backpack").click();

  expect(5).toBe(5)
  expect(6).toBeLessThan(8)
  
    await expect(page).toHaveTitle('Swag Labs');

    expect(5).not.toBe(7)
    await expect(page.locator('[data-test="shopping-cart-link"]')).not.toHaveText("2")

    
})