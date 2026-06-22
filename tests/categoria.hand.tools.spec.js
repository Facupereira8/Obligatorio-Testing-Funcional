const { test, expect } = require('@playwright/test');

test('Navegar a categoría Hand Tools', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

    await page.locator('[data-test="nav-categories"]').click();

    await page.locator('[data-test="nav-hand-tools"]').click();

    await expect(page.locator('[data-test^="product-"]').first())
        .toBeVisible();

});