# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\producto.agregar.favoritos.spec.js >> Agregar producto a favoritos
- Location: tests\producto.agregar.favoritos.spec.js:4:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-test="nav-menu"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-test="nav-menu"]')

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
  4  | test('Agregar producto a favoritos', async ({ page }) => {
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
> 18 |     await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();
     |                                                          ^ Error: expect(locator).toBeVisible() failed
  19 | 
  20 |     // 3. Volver al inicio
  21 |     await page.locator('[data-test="nav-home"]').click();
  22 | 
  23 |     // 4. Seleccionar el primer producto visible
  24 |     await page.locator('[data-test^="product-"]').first().click();
  25 | 
  26 |     // 5. Agregar producto a favoritos
  27 |     await page.locator('[data-test="add-to-favorites"]').click();
  28 | 
  29 |     // 6. Verificar que la acción se realizó correctamente
  30 |     await expect(page.locator('[data-test="add-to-favorites"]')).toBeVisible();
  31 | 
  32 | });
```