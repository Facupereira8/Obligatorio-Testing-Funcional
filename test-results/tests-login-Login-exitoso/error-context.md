# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\login.spec.js >> Login exitoso
- Location: tests\login.spec.js:4:1

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('[data-test="nav-sign-in"]')
Expected: not visible
Received: visible
Timeout:  5000ms

Call log:
  - Expect "not toBeVisible" with timeout 5000ms
  - waiting for locator('[data-test="nav-sign-in"]')
    14 × locator resolved to <a class="nav-link" href="/auth/login" data-test="nav-sign-in" routerlink="/auth/login" _ngcontent-ng-c2913155081="">Sign in</a>
       - unexpected value "visible"

```

```yaml
- link "Sign in":
  - /url: /auth/login
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const usuario = require('./datos/usuario');
  3  | 
  4  | test('Login exitoso', async ({ page }) => {
  5  | 
  6  |     // 1. Ingresar al sistema
  7  |     await page.goto('https://practicesoftwaretesting.com/');
  8  | 
  9  |     // 2. Ir a iniciar sesión
  10 |     await page.locator('[data-test="nav-sign-in"]').click();
  11 | 
  12 |     // 3. Completar credenciales
  13 |     await page.locator('[data-test="email"]')
  14 |         .fill(usuario.email);
  15 | 
  16 |     await page.locator('[data-test="password"]')
  17 |         .fill(usuario.password);
  18 | 
  19 |     // 4. Iniciar sesión
  20 |     await page.locator('[data-test="login-submit"]').click();
  21 | 
  22 |     // 5. Verificar que inició sesión correctamente
  23 | await expect(page.locator('[data-test="nav-sign-in"]'))
> 24 |     .not.toBeVisible();
     |          ^ Error: expect(locator).not.toBeVisible() failed
  25 | 
  26 | });
```