import { test, expect } from '@playwright/test';
import { TesonetHomePage } from '../pages/home.page';

//This case counts available ctegories
test('Tesonet counting career categories ', async ({ page }) => {
    const homepage = new TesonetHomePage(page);
    //Browse the page
    await homepage.goto();
    //Click the Career Menu
    await homepage.clickOnCareer();
    //Count the number of categories
    await homepage.getCategoriesLength();
    });

