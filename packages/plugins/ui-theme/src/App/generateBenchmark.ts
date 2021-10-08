import { mkdir, readFile, rm, writeFile } from 'fs/promises';
import * as path from 'path';

async function cleanGeneratedFolders(folderPath: string) {
  await rm(folderPath, {
    recursive: true,
    force: true,
  });
  await mkdir(folderPath);
}

(async () => {
  try {
    await cleanGeneratedFolders(path.join(__dirname, 'generated'));

    const testContent = (await readFile(path.join(__dirname, `./Benchmark.test.tsx`), 'utf-8'))
      .replace('./App', '../App')
      .replace('./mock-data/store', '../mock-data/store');

    const copyPromises: Promise<void>[] = [];
    for (let i = 0; i < 100; i++) {
      copyPromises.push(
        writeFile(path.join(__dirname, `./generated/Benchmark${i}.test.tsx`), testContent)
      );
    }
    await Promise.all(copyPromises);
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
  }
})();
