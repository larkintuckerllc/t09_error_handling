import { openSync, writeFileSync } from 'fs';

const ENOENT = 'ENOENT';
const FILE_NAME = './hello.txt';

const openOrCreateFile = (): number => {
  try {
    return openSync(FILE_NAME, 'r');
  } catch (err) {
    if (err.code === ENOENT) {
      writeFileSync(FILE_NAME, '');
      return openSync(FILE_NAME, 'r');
    }
    throw err;
  }
};

const fd = openOrCreateFile();
