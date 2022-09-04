import { expect, Locator, Page } from '@playwright/test';
export class TesonetHomePage {
readonly url ="https://www.tesonet.com";
readonly page: Page;
readonly tesonetLogo: Locator;
readonly careerMenu: Locator;
readonly careerLever: Locator

constructor(page: Page) {
    this.page = page;
    this.tesonetLogo = page.locator('//a[@class="brand"]/img[@alt="tesonet-logo"]');
    this.careerMenu = page.locator('//*[@id="menu-main-menu"]/li/a[@href="https://tesonet.com/career/"]');
    this.careerLever = page.locator('//*[@class="career-lever career-lever-v3"]')
}

async goto(){
    await this.page.goto(this.url);
    }

async clickOnCareer(){
    await this.careerMenu.waitFor({state:"visible"});
    await this.careerMenu.click();
    await this.careerLever.waitFor();
    
    }
async getCategoriesLength(){
    const categories = await this.page.$$('//div[@class="career-lever-v3__job-category-box p-7 pb-lg-0 px-lg-8 pt-lg-8"]');
    console.log(categories.length)
    }
}