const { test, expect } = require('@playwright/test');

test('Login con usuario inexistente', async ({ page }) => {

    // 1. Ingresar al sistema
    await page.goto('https://practicesoftwaretesting.com/');

    // 2. Ir a iniciar sesión
    await page.locator('[data-test="nav-sign-in"]').click();

    // 3. Ingresar email inexistente
    await page.locator('[data-test="email"]')
        .fill('usuario.no.existe2026@gmail.com');

    // 4. Ingresar contraseña
    await page.locator('[data-test="password"]')
        .fill('UsuarioFake2026!');

    // 5. Presionar iniciar sesión
    await page.locator('[data-test="login-submit"]').click();

});