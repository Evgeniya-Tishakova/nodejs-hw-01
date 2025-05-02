import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const prevContacts = readContacts();
  return;
};

console.log(await getAllContacts());
