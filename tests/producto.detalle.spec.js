const { test, expect } = require('@playwright/test');

test('Abrir detalle de producto', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

    await page.locator('[data-test^="product-"]').first().click();

    await expect(page.locator('[data-test="add-to-cart"]'))
        .toBeVisible();

});