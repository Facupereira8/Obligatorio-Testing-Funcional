const { test, expect } = require('@playwright/test');

test('Registro de usuario exitoso', async ({ page }) => {

  // 1. Ingresar al sistema
  await page.goto('https://practicesoftwaretesting.com/');

  // 2. Ir a iniciar sesión
  await page.locator('[data-test="nav-sign-in"]').click();

  // 3. Ir a registro
  await page.locator('[data-test="register-link"]').click();

  // 4. Completar formulario

  await page.locator('[data-test="first-name"]').fill('Facundo');

  await page.locator('[data-test="last-name"]').fill('Tester');

  await page.locator('[data-test="dob"]').fill('1995-05-15');

  await page.locator('[data-test="country"]').selectOption('Uruguay');

  await page.locator('[data-test="postal_code"]').fill('11000');

  await page.locator('[data-test="house_number"]').fill('123');

  await page.locator('[data-test="street"]').fill('18 de Julio');

  await page.locator('[data-test="city"]').fill('Montevideo');

  await page.locator('[data-test="state"]').fill('Montevideo');

  await page.locator('[data-test="phone"]').fill('099123456');

  await page.locator('[data-test="email"]').fill(
    `facu${Date.now()}@test.com`
  );

  await page.locator('[data-test="password"]').fill(
  'FacuTest' + Date.now() + '!X9'
);

  // 5. Registrar
  await page.locator('[data-test="register-submit"]').click();

 await expect(page.locator('[data-test="nav-sign-in"]')).toBeVisible();

  await page.waitForTimeout(5000);



});