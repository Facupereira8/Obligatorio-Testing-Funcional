const { test, expect } = require('@playwright/test');
const usuario = require('./datos/usuario');

test('Checkout completo con producto', async ({ page }) => {

    // 1. Ingresar al sistema
    await page.goto('https://practicesoftwaretesting.com/');

    // 2. Iniciar sesión
    await page.locator('[data-test="nav-sign-in"]').click();

    await page.locator('[data-test="email"]').fill(usuario.email);

    await page.locator('[data-test="password"]').fill(usuario.password);

    await page.locator('[data-test="login-submit"]').click();

    await expect(page).toHaveURL(/account/);

    // 3. Volver al inicio
    await page.locator('[data-test="nav-home"]').click();

    // 4. Seleccionar el primer producto visible
    await page.locator('[data-test^="product-"]').first().click();

    // 5. Agregar producto al carrito
    await page.locator('[data-test="add-to-cart"]').click();

    // 6. Ir al carrito
    await page.locator('[data-test="nav-cart"]').click();

    // 7. Iniciar checkout
    await page.locator('[data-test="proceed-1"]').click();

    // 8. Continuar al paso de dirección
    await page.locator('[data-test="proceed-2"]').click();

    // 9. Completar datos mínimos de dirección
    const houseNumber = page.locator('[data-test="house_number"]');

    await houseNumber.click();
    await houseNumber.fill('');
    await houseNumber.type('8');

    await expect(houseNumber).toHaveValue('8');

    // 10. Continuar al pago
    await page.locator('[data-test="proceed-3"]').click();

    // 11. Seleccionar método de pago
    await page.locator('[data-test="payment-method"]')
        .selectOption('buy-now-pay-later');

    // 12. Seleccionar cuotas
    await page.locator('[data-test="monthly_installments"]')
        .selectOption('3');

    // 13. Finalizar compra
    await page.locator('[data-test="finish"]').click();

    // 14. Verificar mensaje de confirmación
    await expect(page.locator('body'))
    .toContainText('Confirm');

});