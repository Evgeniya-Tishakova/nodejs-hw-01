import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('контакти відсутні');
      return;
    }

    const removed = contacts.pop();
  } catch (error) {
    console.error(error.message);
  }
};

removeLastContact();
