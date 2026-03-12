import{expect } from"@playwright/test;

import{test} from "../fixtures/POMfixtures";
//import { Cartpage } from "../pages/cartpage";



test("verification of cart", async ({page, loginpage, homepage})=>{
 
 await loginPageObj.openApplication();



 await expect(HomepageObj.homePageHeading).toHaveText("Swag Labs")
  HomepageObj.backPackAddToButton.click();
await expect(HomepageObj.cartIcon).toHaveText("1");
//await expect(HomepageObj.backPackRemoveButton).toBeVisible();
await HomepageObj.gotoCart();

//const CartpageObj = new Cartpage(page);
 //CartpageObj.backPackItemLink.click();
 //await expect(CartpageObj.backPackItemLink).toHaveText("Sauce Labs Backpack")

})