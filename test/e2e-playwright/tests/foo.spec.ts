import { test, expect } from '@playwright/test';

// 1 test
// real    0m1,687s

// 1000 tests
// real    2m11,678s

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:4873');
  await expect(page).toHaveTitle(/Verdaccio/);

  const signInButton = await page.locator('button[data-testid="header--button-login"]');
  await signInButton.click();
  const signInDialog = await page.locator('#login--dialog');
  expect(signInDialog).toHaveCount(1);

  const closeButton = await page.locator('button[data-testid="close-login-dialog-button"]');
  await closeButton.click();
  await page.waitForSelector('#login--dialog', { state: 'hidden' });
});
