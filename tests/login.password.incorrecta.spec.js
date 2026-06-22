const { test, expect } = require('@playwright/test');
const usuario = require('./datos/usuario');

test('Login con contraseña incorrecta', async ({ page }) => {

    // 1. Ingresar al sistema
    await page.goto('https://practicesoftwaretesting.com/');

    // 2. Ir a iniciar sesión
    await page.locator('[data-test="nav-sign-in"]').click();

    // 3. Ingresar email válido
    await page.locator('[data-test="email"]')
        .fill(usuario.email);

    // 4. Ingresar contraseña incorrecta
    await page.locator('[data-test="password"]')
        .fill('ContraseñaIncorrecta123!');

    // 5. Presionar iniciar sesión
    await page.locator('[data-test="login-submit"]').click();

});