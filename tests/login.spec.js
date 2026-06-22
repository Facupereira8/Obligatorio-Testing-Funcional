const { test, expect } = require('@playwright/test');
const usuario = require('./datos/usuario');

test('Login exitoso', async ({ page }) => {

    // 1. Ingresar al sistema
    await page.goto('https://practicesoftwaretesting.com/');

    // 2. Ir a iniciar sesión
    await page.locator('[data-test="nav-sign-in"]').click();

    // 3. Completar credenciales
    await page.locator('[data-test="email"]')
        .fill(usuario.email);

    await page.locator('[data-test="password"]')
        .fill(usuario.password);

    // 4. Iniciar sesión
    await page.locator('[data-test="login-submit"]').click();

    // 5. Verificar que inició sesión correctamente
await expect(page.locator('[data-test="nav-sign-in"]'))
    .not.toBeVisible();

});