import { test, expect } from '@playwright/test';

// 1 test
// real    0m1,687s

// 1000 tests - 16 threads
// real    2m19,297s

test('basic test', async ({ page }) => {
  const signInDialog = page.locator('#login--dialog');

  await page.goto('http://localhost:4873');
  await expect(page).toHaveTitle(/Verdaccio/);

  await page.click('button[data-testid="header--button-login"]');
  await expect(signInDialog).toHaveCount(1);

  await page.click('button[data-testid="close-login-dialog-button"]');
  await expect(signInDialog).toBeHidden();
});
