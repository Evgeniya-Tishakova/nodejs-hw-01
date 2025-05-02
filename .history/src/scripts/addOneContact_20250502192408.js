import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from './generateContacts.js';

export const addOneContact = async () => {
  try {
    const prevContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...prevContacts, ...newContact];

    await writeContacts(updatedContacts);
  } catch (error) {
    console.error('Помилка додавання даних до файлу:', error.message);
  }
};

addOneContact();
