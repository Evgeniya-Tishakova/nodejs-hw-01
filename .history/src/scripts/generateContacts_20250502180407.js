import { createFakeContacts } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const prevContacts = await readContacts();

  let contacts = [];

  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContacts());
  }
};
generateContacts(5);
