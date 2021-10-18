import { test, expect } from '@playwright/test';

test.describe('dummy', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4873');
  });

  test('1', async ({ page }) => {
    const signInDialog = page.locator('#login--dialog');

    await expect(page).toHaveTitle(/Verdaccio/);

    await page.click('button[data-testid="header--button-login"]');
    await expect(signInDialog).toHaveCount(1);

    await page.click('button[data-testid="close-login-dialog-button"]');
    await expect(signInDialog).toBeHidden();
  });

  test('2', async ({ page }) => {
    const signInDialog = page.locator('#login--dialog');

    await expect(page).toHaveTitle(/Verdaccio/);

    await page.click('button[data-testid="header--button-login"]');
    await expect(signInDialog).toHaveCount(1);

    await page.click('button[data-testid="close-login-dialog-button"]');
    await expect(signInDialog).toBeHidden();
  });

  test('3', async ({ page }) => {
    const signInDialog = page.locator('#login--dialog');

    await expect(page).toHaveTitle(/Verdaccio/);

    await page.click('button[data-testid="header--button-login"]');
    await expect(signInDialog).toHaveCount(1);

    await page.click('button[data-testid="close-login-dialog-button"]');
    await expect(signInDialog).toBeHidden();
  });

  test('4', async ({ page }) => {
    const signInDialog = page.locator('#login--dialog');

    await expect(page).toHaveTitle(/Verdaccio/);

    await page.click('button[data-testid="header--button-login"]');
    await expect(signInDialog).toHaveCount(1);

    await page.click('button[data-testid="close-login-dialog-button"]');
    await expect(signInDialog).toBeHidden();
  });

  test('5', async ({ page }) => {
    const signInDialog = page.locator('#login--dialog');

    await expect(page).toHaveTitle(/Verdaccio/);

    await page.click('button[data-testid="header--button-login"]');
    await expect(signInDialog).toHaveCount(1);

    await page.click('button[data-testid="close-login-dialog-button"]');
    await expect(signInDialog).toBeHidden();
  });

  test('6', async ({ page }) => {
    const signInDialog = page.locator('#login--dialog');

    await expect(page).toHaveTitle(/Verdaccio/);

    await page.click('button[data-testid="header--button-login"]');
    await expect(signInDialog).toHaveCount(1);

    await page.click('button[data-testid="close-login-dialog-button"]');
    await expect(signInDialog).toBeHidden();
  });

  test('7', async ({ page }) => {
    const signInDialog = page.locator('#login--dialog');

    await expect(page).toHaveTitle(/Verdaccio/);

    await page.click('button[data-testid="header--button-login"]');
    await expect(signInDialog).toHaveCount(1);

    await page.click('button[data-testid="close-login-dialog-button"]');
    await expect(signInDialog).toBeHidden();
  });

  test('8', async ({ page }) => {
    const signInDialog = page.locator('#login--dialog');

    await expect(page).toHaveTitle(/Verdaccio/);

    await page.click('button[data-testid="header--button-login"]');
    await expect(signInDialog).toHaveCount(1);

    await page.click('button[data-testid="close-login-dialog-button"]');
    await expect(signInDialog).toBeHidden();
  });

  test('9', async ({ page }) => {
    const signInDialog = page.locator('#login--dialog');

    await expect(page).toHaveTitle(/Verdaccio/);

    await page.click('button[data-testid="header--button-login"]');
    await expect(signInDialog).toHaveCount(1);

    await page.click('button[data-testid="close-login-dialog-button"]');
    await expect(signInDialog).toBeHidden();
  });

  test('10', async ({ page }) => {
    const signInDialog = page.locator('#login--dialog');

    await expect(page).toHaveTitle(/Verdaccio/);

    await page.click('button[data-testid="header--button-login"]');
    await expect(signInDialog).toHaveCount(1);

    await page.click('button[data-testid="close-login-dialog-button"]');
    await expect(signInDialog).toBeHidden();
  });
});
