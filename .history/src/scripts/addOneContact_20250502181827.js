import { appendFile } from 'node.fs/promises';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  await readContacts;

  await appendFile();
};

addOneContact();
