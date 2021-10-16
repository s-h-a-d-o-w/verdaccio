import { promisify } from 'util';
import * as path from 'path';
import { rename, readFile, writeFile, rm, mkdir } from 'fs/promises';
import { ncp as originalNcp } from 'ncp';

const ncp = promisify(originalNcp);

async function cleanGeneratedFolders(folderPath: string) {
  await rm(folderPath, {
    recursive: true,
    force: true,
  });
  await mkdir(folderPath);
}

(async () => {
  try {
    await cleanGeneratedFolders(path.join(__dirname, '../storage'));
    await cleanGeneratedFolders(path.join(__dirname, '../cypress/integration/generated'));

    const testContent = await readFile(
      path.join(__dirname, `../cypress/integration/foo.spec.ts`),
      'utf-8'
    );

    const db: { list: string[]; secret: string } = {
      list: [],
      secret: "doesn't matter",
    };
    const copyPromises = [];

    for (let i = 0; i < 100; i++) {
      copyPromises.push(
        ncp(
          path.join(__dirname, '../mock-data/dummy'),
          path.join(__dirname, '../storage/dummy' + i)
        )
      );
    }

    const modificationPromises = copyPromises.map(async (copyPromise, index) => {
      await copyPromise;
      await rename(
        path.join(__dirname, `../storage/dummy${index}/dummy-1.0.0.tgz`),
        path.join(__dirname, `../storage/dummy${index}/dummy${index}-1.0.0.tgz`)
      );

      const packageJson = await readFile(
        path.join(__dirname, `../storage/dummy${index}/package.json`),
        'utf-8'
      );
      await writeFile(
        path.join(__dirname, `../storage/dummy${index}/package.json`),
        packageJson.replace(/dummy/g, 'dummy' + index)
      );

      await writeFile(
        path.join(__dirname, `../cypress/integration/generated/foo${index}.spec.ts`),
        testContent
      );

      db.list.push('dummy' + index);
    });

    await Promise.all(modificationPromises);
    await writeFile(path.join(__dirname, '../storage/.verdaccio-db.json'), JSON.stringify(db));
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
  }
})();
