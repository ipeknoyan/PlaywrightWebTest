import { expect, Locator, Page } from '@playwright/test';
export class TesonetHomePage {
    
readonly url ="https://www.tesonet.com";
readonly page: Page;
readonly tesonetLogo: Locator;
readonly careerMenu: Locator;
readonly careerLever: Locator

// create a locators
constructor(page: Page) {
    this.page = page;
    this.tesonetLogo = page.locator('//a[@class="brand"]/img[@alt="tesonet-logo"]');
    this.careerMenu = page.locator('//*[@id="menu-main-menu"]/li/a[@href="https://tesonet.com/career/"]');
    this.careerLever = page.locator('//*[@class="career-lever career-lever-v3"]')
}

// create keywords for test cases
async goto(){
    //Browse the page
    await this.page.goto(this.url);
    //Make sure page has the correct title
    await expect(this.page).toHaveTitle('We are Tesonet. We build the digital future.')
    }

async clickOnCareer(){
    // Wait for manu is visible
    await this.careerMenu.waitFor({state:"visible"});
    // Click on career menu
    await this.careerMenu.click();
     // Make sure career page is opened
    await this.careerLever.waitFor();  
    }

async getCategoriesLength(){
    //Get available categories in carees page
    const categories = await this.page.$$('//div[@class="career-lever-v3__job-category-box p-7 pb-lg-0 px-lg-8 pt-lg-8"]');
    //Count and log the number of available categories in carees page
    console.log(categories.length)
    }
}