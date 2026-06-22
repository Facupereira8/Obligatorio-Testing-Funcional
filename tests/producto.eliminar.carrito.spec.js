const { test, expect } = require('@playwright/test');

test('Eliminar producto del carrito', async ({ page }) => {

    // 1. Entrar a la página
    await page.goto('https://practicesoftwaretesting.com/');

    // 2. Seleccionar el primer producto visible
    await page.locator('[data-test^="product-"]').first().click();

    // 3. Agregar al carrito
    await page.locator('[data-test="add-to-cart"]').click();

    // 4. Ir al carrito
    await page.locator('[data-test="nav-cart"]').click();

    // 5. Verificar que el producto está en el carrito
    await expect(page.locator('[data-test="product-title"]')).toBeVisible();

    // 6. Eliminar producto
    await page.locator('.btn.btn-danger').click();

    // 7. Verificar que ya no aparece el producto en el carrito
    await expect(page.locator('[data-test="product-title"]')).not.toBeVisible();

});