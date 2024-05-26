import { expect, type Locator, type Page } from '@playwright/test'

export class LoginPage {
    //define variables for login page elements
    readonly page: Page;
    readonly txt_username: Locator;
    readonly pw_password: Locator;
    readonly btn_login: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.txt_username = page.locator('[data-test="username"]');
        this.pw_password = page.locator('[data-test="password"]');
        this.btn_login = page.locator('[data-test="login-button"]');
    }

    //navigate to the given url
    async GOTO(url: string) {
        await this.page.goto(url);
    }

    //login to application
    async LoginUser(username: string, password: string) {
        await this.txt_username.fill(username);
        await this.pw_password.fill(password);
        await this.btn_login.click()
    }
}