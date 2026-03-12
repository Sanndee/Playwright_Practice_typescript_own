import{test, expect } from "@playwright/test";

test("Handle new Page",async({context})=>{

   const page = await context.newPage();

})