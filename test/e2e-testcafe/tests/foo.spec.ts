import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

// 1 test
// real    0m8,001s

// 1000 tests, 16 threads
// real    4m36,743s
// 4 threads
// real    6m11,694s

// # Doesn't run tests in parallel out of the box
// # when using 8 or more browser instances:
// (node:54505) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 error listeners added to [BrowserSet]. Use emitter.setMaxListeners() to increase limit
// (Use `node --trace-warnings ...` to show where the warning was created)

const getWindowTitle = ClientFunction(() => window.document.title);

fixture`Getting Started`.page`http://localhost:4873`;

test('My first test', async (t) => {
  await t.expect(getWindowTitle()).match(/Verdaccio/);

  await t.click('button[data-testid="header--button-login"]');
  const signInDialog = await Selector('#login--dialog');
  await t.expect(signInDialog.exists).ok();

  await t.click('button[data-testid="close-login-dialog-button');
  await t.expect(signInDialog.exists).notOk();
});
