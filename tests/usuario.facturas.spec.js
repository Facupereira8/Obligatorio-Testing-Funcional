const { test, expect } = require('@playwright/test');
const usuario = require('./datos/usuario');

test('Acceder a facturas del usuario', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

    await page.locator('[data-test="nav-sign-in"]').click();

    await page.locator('[data-test="email"]').fill(usuario.email);

    await page.locator('[data-test="password"]').fill(usuario.password);

    await page.locator('[data-test="login-submit"]').click();

    await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();

    await page.locator('[data-test="nav-menu"]').click();

    await page.locator('[data-test="nav-invoices"]').click();

    await expect(page.locator('body'))
        .toContainText('Invoices');

});