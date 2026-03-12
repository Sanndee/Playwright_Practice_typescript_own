import{Locator, Page, test } from "@playwright/test";

  export class Loginpage{

    readonly page : Page;
    readonly usernameTextBox : Locator;
    readonly passwordTextBox : Locator;
    readonly loginButton : Locator;


     constructor (page: Page){
            this.page= page;

            this.usernameTextBox = page.locator("id=user-name");
            this.passwordTextBox= page.locator("id=password")
            this.loginButton= page.locator("id=login-button")

     }
   

        async openApplication(){
        await this.page.goto("https://www.saucedemo.com/")




        }


     async login(){
        await     this.usernameTextBox.fill("standard_user")
        await    this.passwordTextBox.fill("secret_sauce")
        await    this.loginButton.click();
     }





  }