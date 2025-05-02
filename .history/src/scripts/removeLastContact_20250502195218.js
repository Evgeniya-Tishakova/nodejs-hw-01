import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts > 0) {
    }
  } catch (error) {
    console.error(error.message);
  }
};

removeLastContact();
