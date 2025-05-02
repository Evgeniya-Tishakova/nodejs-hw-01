import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from './generateContacts.js';

export const addOneContact = async () => {
  try {
    const prevContacts = await readContacts();
    const newContacts = createFakeContact();
    const updatedContacts = [...prevContacts, ...newContacts];
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error);
  }
};

addOneContact();
