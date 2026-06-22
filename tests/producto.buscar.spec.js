const { test, expect } = require('@playwright/test');

test('Buscar producto por nombre', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

    await page.locator('[data-test="search-query"]').fill('pliers');

    await page.locator('[data-test="search-submit"]').click();

    await expect(page.locator('[data-test^="product-"]').first())
        .toBeVisible();

});