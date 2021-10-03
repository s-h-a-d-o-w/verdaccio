import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

// real    0m8,001s

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
