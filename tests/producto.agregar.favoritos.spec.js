const { test, expect } = require('@playwright/test');
const usuario = require('./datos/usuario');

test('Agregar producto a favoritos', async ({ page }) => {

    // 1. Ingresar al sistema
    await page.goto('https://practicesoftwaretesting.com/');

    // 2. Iniciar sesión
    await page.locator('[data-test="nav-sign-in"]').click();

    await page.locator('[data-test="email"]').fill(usuario.email);

    await page.locator('[data-test="password"]').fill(usuario.password);

    await page.locator('[data-test="login-submit"]').click();

    await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();

    // 3. Volver al inicio
    await page.locator('[data-test="nav-home"]').click();

    // 4. Seleccionar el primer producto visible
    await page.locator('[data-test^="product-"]').first().click();

    // 5. Agregar producto a favoritos
    await page.locator('[data-test="add-to-favorites"]').click();

    // 6. Verificar que la acción se realizó correctamente
    await expect(page.locator('[data-test="add-to-favorites"]')).toBeVisible();

}); 