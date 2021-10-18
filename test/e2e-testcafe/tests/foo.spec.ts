import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

const getWindowTitle = ClientFunction(() => window.document.title);

fixture`dummy`.page`http://localhost:4873`;

test('1', async (t) => {
  await t.expect(getWindowTitle()).match(/Verdaccio/);

  await t.click('button[data-testid="header--button-login"]');
  const signInDialog = await Selector('#login--dialog');
  await t.expect(signInDialog.exists).ok();

  await t.click('button[data-testid="close-login-dialog-button');
  await t.expect(signInDialog.exists).notOk();
});

test('2', async (t) => {
  await t.expect(getWindowTitle()).match(/Verdaccio/);

  await t.click('button[data-testid="header--button-login"]');
  const signInDialog = await Selector('#login--dialog');
  await t.expect(signInDialog.exists).ok();

  await t.click('button[data-testid="close-login-dialog-button');
  await t.expect(signInDialog.exists).notOk();
});

test('3', async (t) => {
  await t.expect(getWindowTitle()).match(/Verdaccio/);

  await t.click('button[data-testid="header--button-login"]');
  const signInDialog = await Selector('#login--dialog');
  await t.expect(signInDialog.exists).ok();

  await t.click('button[data-testid="close-login-dialog-button');
  await t.expect(signInDialog.exists).notOk();
});

test('4', async (t) => {
  await t.expect(getWindowTitle()).match(/Verdaccio/);

  await t.click('button[data-testid="header--button-login"]');
  const signInDialog = await Selector('#login--dialog');
  await t.expect(signInDialog.exists).ok();

  await t.click('button[data-testid="close-login-dialog-button');
  await t.expect(signInDialog.exists).notOk();
});

test('5', async (t) => {
  await t.expect(getWindowTitle()).match(/Verdaccio/);

  await t.click('button[data-testid="header--button-login"]');
  const signInDialog = await Selector('#login--dialog');
  await t.expect(signInDialog.exists).ok();

  await t.click('button[data-testid="close-login-dialog-button');
  await t.expect(signInDialog.exists).notOk();
});

test('6', async (t) => {
  await t.expect(getWindowTitle()).match(/Verdaccio/);

  await t.click('button[data-testid="header--button-login"]');
  const signInDialog = await Selector('#login--dialog');
  await t.expect(signInDialog.exists).ok();

  await t.click('button[data-testid="close-login-dialog-button');
  await t.expect(signInDialog.exists).notOk();
});

test('7', async (t) => {
  await t.expect(getWindowTitle()).match(/Verdaccio/);

  await t.click('button[data-testid="header--button-login"]');
  const signInDialog = await Selector('#login--dialog');
  await t.expect(signInDialog.exists).ok();

  await t.click('button[data-testid="close-login-dialog-button');
  await t.expect(signInDialog.exists).notOk();
});

test('8', async (t) => {
  await t.expect(getWindowTitle()).match(/Verdaccio/);

  await t.click('button[data-testid="header--button-login"]');
  const signInDialog = await Selector('#login--dialog');
  await t.expect(signInDialog.exists).ok();

  await t.click('button[data-testid="close-login-dialog-button');
  await t.expect(signInDialog.exists).notOk();
});

test('9', async (t) => {
  await t.expect(getWindowTitle()).match(/Verdaccio/);

  await t.click('button[data-testid="header--button-login"]');
  const signInDialog = await Selector('#login--dialog');
  await t.expect(signInDialog.exists).ok();

  await t.click('button[data-testid="close-login-dialog-button');
  await t.expect(signInDialog.exists).notOk();
});

test('10', async (t) => {
  await t.expect(getWindowTitle()).match(/Verdaccio/);

  await t.click('button[data-testid="header--button-login"]');
  const signInDialog = await Selector('#login--dialog');
  await t.expect(signInDialog.exists).ok();

  await t.click('button[data-testid="close-login-dialog-button');
  await t.expect(signInDialog.exists).notOk();
});
