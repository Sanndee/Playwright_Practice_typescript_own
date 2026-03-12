import{test,expect } from "@playwright/test";



test.beforeEach("Authentication", async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByRole('textbox', { name: 'Username' }).fill("Admin");
await page.getByRole('textbox', { name: 'Password' }).fill("admin123");
 await page.getByRole('button', { name: 'Login' }).click();
 //await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index ")
//await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
})


test("Add candiatate for recruitment time sheets", async({page})=>{

    //await expect(page.getByRole('link', { name: 'Time' })).toBeEnabled();

    await page.getByRole('link', { name: 'Time' }).click();

    await expect(page.getByRole('listitem').filter({ hasText: 'Timesheets' })).toHaveText("Timesheets");
    await page.getByRole('textbox', { name: 'Type for hints...' }).fill("Rahul  Das");
    await page.getByRole('link',{name : 'view'}).click();






})

