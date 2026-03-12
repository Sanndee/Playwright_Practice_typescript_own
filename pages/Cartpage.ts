import{test, expect, Page, Locator} from "@playwright/test";


export class Cartpage{
   
    readonly page : Page;
    readonly backPackItemLink : Locator;



    constructor(page: Page){
            this.page = page;
            this.backPackItemLink = page.getByRole( 'link', {name : 'Sauce Labs Backpack'})




    }





}