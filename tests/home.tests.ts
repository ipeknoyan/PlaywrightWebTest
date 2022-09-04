import { test, expect } from '@playwright/test';
import { TesonetHomePage } from '../pages/home.page';

test('Tesonet counting career categories ', async ({ page }) => {
    const homepage = new TesonetHomePage(page);
    await homepage.goto();
    await homepage.clickOnCareer();
    await homepage.getCategoriesLength();
    });

