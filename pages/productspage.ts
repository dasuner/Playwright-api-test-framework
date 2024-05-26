import { expect, type Locator, type Page } from '@playwright/test'

export class Products {
    //declare variables for the product page elements
    readonly page: Page;
    readonly lbl_product: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.lbl_product = page.locator('[data-test="title"]');
    }

    //is label visible
    async VisibleTile() {
        return await this.lbl_product.isVisible();
    }

    //get label content
    async getContent(){
        return await this.lbl_product.textContent();
    }
}