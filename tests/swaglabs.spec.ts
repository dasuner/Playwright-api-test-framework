import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { Products } from '../pages/productspage';

test('login to swaglabs', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.GOTO('https://www.saucedemo.com/');
    await loginPage.LoginUser('standard_user', 'secret_sauce');
    const products = new Products(page);
    expect(await products.VisibleTile());
    expect(await products.getContent()).toMatch('Products');
})