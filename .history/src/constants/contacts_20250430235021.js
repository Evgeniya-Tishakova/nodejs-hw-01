import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const PATH_DB = path.join(dirname, '..', 'db', 'db.json');

const readDB = async () => {
  try {
    const response = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
  } catch (error) {
    console.error(error.message);
  }
};
