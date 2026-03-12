import{expect, test } from "@playwright/test"

test("radio button", async({page})=>{

   await  page.goto("https://artoftesting.com/samplesiteforselenium");
    const maleradio = await  page.locator("#male")
    await maleradio.check();
    await expect(maleradio).toBeChecked();
    await page.locator("#female").check();
    await expect(maleradio).not.toBeChecked();
     
})

test("checkbox list ", async ({page})=>{

    await  page.goto("https://artoftesting.com/samplesiteforselenium");

    const checkbox =  page.locator('[class="Automation"]')
     
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    const checkbox2 = page.locator ('[class="Performance"]').check();
    await checkbox.uncheck();

})

test("dropdowns to be executed",async({page})=>{


    await  page.goto("https://artoftesting.com/samplesiteforselenium");

    //await page.locator("#testingDropdown").selectOption("Performance Testing");
    //await page.locator("#testingDropdown").selectOption('["value="Performance"]');

    await page.locator("#testingDropdown").selectOption("Database Testing");

    // multiselect dropdowns should be like this :
    //  await page.locator("#cars").selectOption(['volvo', 'Opel','Audi'])


})
