import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    await writeFile(PATH_DB, JSON.stringify(updatedContacts, undefined, 2), {
      encoding: 'utf8',
    });
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error);
  }
};
