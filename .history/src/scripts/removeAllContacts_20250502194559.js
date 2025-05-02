import { readContacts } from '../utils/readContacts.js';

export const removeAllContacts = async () => {
  try {
    const allContacts = readContacts();
    return allContacts.delete;
  } catch (error) {
    console.error(error.message);
  }
};

removeAllContacts();
