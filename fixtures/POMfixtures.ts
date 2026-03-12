import{test as baseTest} from "@playwright/test";
import { Loginpage } from "../pages/loginpage";
import { Homepage } from "../pages/homepage";
import { Cartpage } from "../pages/cartpage";


type MyPomfixtures = {
   loginpage =Loginpage;
   //homepage = Homepage;
   //cartpage = Cartpage;

}

export const test = baseTest.extend<MyPomfixtures>({

    loginpage : async ({page}, use)=>{
        const loginpage = new Loginpage(page);
        await use(loginpage);



    }










})