import { expect, Locator, Page } from '@playwright/test';
export class TesonetHomePage {
readonly url ="https://www.tesonet.com";
readonly page: Page;
readonly tesonetLogo: Locator;
readonly careerMenu: Locator

constructor(page: Page) {
    this.page = page;
    this.tesonetLogo = page.locator('//a[@class="brand"]/img[@alt="tesonet-logo"]');
    this.careerMenu = page.locator('//*[@id="menu-main-menu"]/li/a[@href="https://tesonet.com/career/"]');
    }

async goto(){
    await this.page.goto(this.url);
    }

async clickOnCareer(){
    await this.careerMenu.waitFor({state:"visible"});
    await this.careerMenu.click();
    }

}