const { test, expect } = require('@playwright/test');
const usuario = require('./datos/usuario');

test('Iniciar checkout desde el carrito', async ({ page }) => {

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

    // 5. Agregar producto al carrito
    await page.locator('[data-test="add-to-cart"]').click();

    // 6. Ir al carrito
    await page.locator('[data-test="nav-cart"]').click();

    // 7. Verificar que el producto aparece en el carrito
    await expect(page.locator('[data-test="product-title"]')).toBeVisible();

    // 8. Iniciar checkout
    await page.locator('[data-test="proceed-1"]').click();

    // 9. Verificar que aparece el siguiente paso del checkout
    await expect(page).not.toHaveURL(/cart/);

});