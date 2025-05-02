import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const prevContacts = readContacts();
    return prevContacts;
  } catch (error) {
    console.error(error.message);
  }
};

console.log(await getAllContacts());
