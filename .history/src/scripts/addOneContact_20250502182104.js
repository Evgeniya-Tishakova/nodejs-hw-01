import { appendFile } from 'node.fs/promises';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  try {
    const prevContacts = await readContacts();
    const addContact = appendFile(prevContacts, 'utf8');
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error);
  }
};

addOneContact();
