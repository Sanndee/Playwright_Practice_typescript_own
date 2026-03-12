import{test ,expect } from "@playwright/test";

import { Loginpage } from "../pages/loginpage";

import { Homepage } from "../pages/homepage";
//import { Cartpage } from "../pages/cartpage";



test("verification of cart", async ({page})=>{
 const loginPageObj = new Loginpage(page);

 await loginPageObj.openApplication();
 await loginPageObj.login();

 const HomepageObj = new Homepage(page);

 await expect(HomepageObj.homePageHeading).toHaveText("Swag Labs")
  HomepageObj.backPackAddToButton.click();
await expect(HomepageObj.cartIcon).toHaveText("1");
//await expect(HomepageObj.backPackRemoveButton).toBeVisible();
await HomepageObj.gotoCart();

//const CartpageObj = new Cartpage(page);
 //CartpageObj.backPackItemLink.click();
 //await expect(CartpageObj.backPackItemLink).toHaveText("Sauce Labs Backpack")

})