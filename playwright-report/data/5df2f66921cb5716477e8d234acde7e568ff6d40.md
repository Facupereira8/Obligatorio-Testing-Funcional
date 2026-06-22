# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\checkout.completo.spec.js >> Checkout completo con producto
- Location: tests\checkout.completo.spec.js:4:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /account/
Received string:  "https://practicesoftwaretesting.com/auth/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://practicesoftwaretesting.com/auth/login"

```

```yaml
- text: View the
- link "Documentation":
  - /url: https://testsmith-io.github.io/practice-software-testing/#/
- text: for this application. Practice Black Box Testing & Bug Hunting
- button "Testing Guide"
- button "🐛 Bug Hunting"
- navigation:
  - link "Practice Software Testing - Toolshop":
    - /url: /
    - img
  - menubar "Main menu":
    - menuitem "Home":
      - link "Home":
        - /url: /
    - menuitem "Categories":
      - button "Categories"
    - menuitem "Contact":
      - link "Contact":
        - /url: /contact
    - menuitem "Sign in":
      - link "Sign in":
        - /url: /auth/login
  - button "Select language": EN
- heading "Login" [level=3]
- button "Sign in with Google"
- text: or use Email address *
- textbox "Email address *":
  - /placeholder: Your email
  - text: facu.test2026@gmail.com
- text: Password *
- textbox "Password *":
  - /placeholder: Your password
  - text: FacuTest2026!
- button
- button "Login"
- paragraph:
  - text: Not yet an account?
  - link "Register your account":
    - /url: /auth/register
  - link "Forgot your Password?":
    - /url: /auth/forgot-password
- text: Invalid email or password
- paragraph:
  - text: This is a DEMO application (
  - link "GitHub repo":
    - /url: https://github.com/testsmith-io/practice-software-testing
  - text: ), used for software testing training purpose. |
  - link "Privacy Policy":
    - /url: /privacy
  - text: "| Banner photo by"
  - link "Barn Images":
    - /url: https://unsplash.com/@barnimages
  - text: "on"
  - link "Unsplash":
    - /url: https://unsplash.com/photos/t5YUoHW6zRo
  - text: .
- button "Open chat":
  - img
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const usuario = require('./datos/usuario');
  3  | 
  4  | test('Checkout completo con producto', async ({ page }) => {
  5  | 
  6  |     // 1. Ingresar al sistema
  7  |     await page.goto('https://practicesoftwaretesting.com/');
  8  | 
  9  |     // 2. Iniciar sesión
  10 |     await page.locator('[data-test="nav-sign-in"]').click();
  11 | 
  12 |     await page.locator('[data-test="email"]').fill(usuario.email);
  13 | 
  14 |     await page.locator('[data-test="password"]').fill(usuario.password);
  15 | 
  16 |     await page.locator('[data-test="login-submit"]').click();
  17 | 
> 18 |     await expect(page).toHaveURL(/account/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  19 | 
  20 |     // 3. Volver al inicio
  21 |     await page.locator('[data-test="nav-home"]').click();
  22 | 
  23 |     // 4. Seleccionar el primer producto visible
  24 |     await page.locator('[data-test^="product-"]').first().click();
  25 | 
  26 |     // 5. Agregar producto al carrito
  27 |     await page.locator('[data-test="add-to-cart"]').click();
  28 | 
  29 |     // 6. Ir al carrito
  30 |     await page.locator('[data-test="nav-cart"]').click();
  31 | 
  32 |     // 7. Iniciar checkout
  33 |     await page.locator('[data-test="proceed-1"]').click();
  34 | 
  35 |     // 8. Continuar al paso de dirección
  36 |     await page.locator('[data-test="proceed-2"]').click();
  37 | 
  38 |     // 9. Completar datos mínimos de dirección
  39 |     const houseNumber = page.locator('[data-test="house_number"]');
  40 | 
  41 |     await houseNumber.click();
  42 |     await houseNumber.fill('');
  43 |     await houseNumber.type('8');
  44 | 
  45 |     await expect(houseNumber).toHaveValue('8');
  46 | 
  47 |     // 10. Continuar al pago
  48 |     await page.locator('[data-test="proceed-3"]').click();
  49 | 
  50 |     // 11. Seleccionar método de pago
  51 |     await page.locator('[data-test="payment-method"]')
  52 |         .selectOption('buy-now-pay-later');
  53 | 
  54 |     // 12. Seleccionar cuotas
  55 |     await page.locator('[data-test="monthly_installments"]')
  56 |         .selectOption('3');
  57 | 
  58 |     // 13. Finalizar compra
  59 |     await page.locator('[data-test="finish"]').click();
  60 | 
  61 |     // 14. Verificar mensaje de confirmación
  62 |     await expect(page.locator('body'))
  63 |     .toContainText('Confirm');
  64 | 
  65 | });
```