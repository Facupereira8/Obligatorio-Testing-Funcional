const { test, expect } = require('@playwright/test');

test('Volver al inicio desde detalle de producto', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

    await page.locator('[data-test^="product-"]').first().click();

    await page.locator('[data-test="nav-home"]').click();

    await expect(page.locator('[data-test^="product-"]').first())
        .toBeVisible();

});