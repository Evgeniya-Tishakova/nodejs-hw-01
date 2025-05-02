import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const AllContacts = await readContacts();
    return AllContacts;
  } catch (error) {
    console.error(error.message);
  }
};

console.log(await getAllContacts());
