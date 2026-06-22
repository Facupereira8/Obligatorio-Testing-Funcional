const { test, expect } = require('@playwright/test');

test('Ordenar productos por precio descendente', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

    await page.locator('[data-test="sort"]').selectOption('price,desc');

    await expect(page.locator('[data-test^="product-"]').first())
        .toBeVisible();

});