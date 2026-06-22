const { test, expect } = require('@playwright/test');

test('Acceder a la sección Contacto', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

    await page.locator('[data-test="nav-contact"]').click();

    await expect(page.locator('body'))
        .toContainText('Contact');

});