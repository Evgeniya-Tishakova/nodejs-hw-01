import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = readContacts();
  } catch (error) {
    console.error(error.message);
  }
};

removeLastContact();
