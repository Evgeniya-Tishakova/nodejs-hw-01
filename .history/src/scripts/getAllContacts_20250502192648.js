import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const prevContacts = readContacts;
};

console.log(await getAllContacts());
