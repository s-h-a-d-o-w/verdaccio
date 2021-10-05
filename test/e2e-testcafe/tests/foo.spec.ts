import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

// 1 test
// real    0m8,001s

// 100 tests, 16 threads
// real    0m25,231s

// 1000 tests, 16 threads
// real    3m5,543s
// 8 threads
// real    3m13,890s
// 4 threads
// real    4m57,376s

// when using 8 or more browser instances:
// (node:54505) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 error listeners added to [BrowserSet]. Use emitter.setMaxListeners() to increase limit
// (Use `node --trace-warnings ...` to show where the warning was created)

const getWindowTitle = ClientFunction(() => window.document.title);

fixture`Getting Started`.page`http://localhost:4873`;

test('My first test', async (t) => {
  await t.expect(getWindowTitle()).match(/Verdaccio/);

  await t.click('button[data-testid="header--button-login"]');
  const articleHeader = await Selector('#login--dialog');
  await t.expect(articleHeader.exists).ok();

  await t.click('button[data-testid="close-login-dialog-button');
  await t.expect(articleHeader.exists).notOk();
});
