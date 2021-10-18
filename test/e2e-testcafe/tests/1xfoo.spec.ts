import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

// # Doesn't run tests in parallel out of the box
// # when using 8 or more browser instances:
// (node:54505) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 error listeners added to [BrowserSet]. Use emitter.setMaxListeners() to increase limit
// (Use `node --trace-warnings ...` to show where the warning was created)

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
