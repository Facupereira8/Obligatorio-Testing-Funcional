const { test, expect } = require('@playwright/test');

test('Modificar cantidad de producto en carrito', async ({ page }) => {

    // 1. Ingresar al sistema
    await page.goto('https://practicesoftwaretesting.com/');

    // 2. Seleccionar producto
    await page.locator('[data-test^="product-"]').first().click();

    // 3. Agregar producto al carrito
    await page.locator('[data-test="add-to-cart"]').click();

    // 4. Ir al carrito
    await page.locator('[data-test="nav-cart"]').click();

    // 5. Cambiar cantidad
    await page.locator('[data-test="product-quantity"]').fill('4');

    await page.locator('[data-test="product-quantity"]').press('Enter');

    // 6. Verificar cantidad modificada
    await expect(page.locator('[data-test="product-quantity"]'))
        .toHaveValue('4');

});