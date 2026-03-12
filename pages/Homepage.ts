import{test,  Page, Locator } from "@playwright/test";


 export class Homepage{

    readonly page: Page;
    readonly homePageHeading : Locator;

    readonly backPackAddToButton : Locator;
    readonly backPackRemoveButton : Locator;
    readonly cartIcon : Locator;

    constructor(page: Page){
            this.page=page;
            this.backPackAddToButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
            this.backPackRemoveButton= page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
            //this.cartIcon = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
            this.cartIcon= page.locator("#shopping_cart_container")
            this.homePageHeading= page.getByText('Swag Labs');
    }


        async backPackAddToCart(){
            await this.backPackAddToButton.click();
            

        }

        async gotoCart(){

            this.cartIcon.click();
        }

 }

