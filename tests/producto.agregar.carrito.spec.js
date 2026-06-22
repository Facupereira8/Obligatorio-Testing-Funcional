const { test, expect } = require('@playwright/test');

test('Agregar producto al carrito', async ({ page }) => {

    // 1. Ingresar al sistema
    await page.goto('https://practicesoftwaretesting.com/');

    // 2. Seleccionar producto
    await page.locator('[data-test^="product-"]').first().click();

    // 3. Agregar producto al carrito
    await page.locator('[data-test="add-to-cart"]').click();

    // 4. Ir al carrito
    await page.locator('[data-test="nav-cart"]').click();

    // 5. Verificar que el producto aparece en el carrito
    await expect(page.locator('[data-test="product-title"]')).toBeVisible();

});