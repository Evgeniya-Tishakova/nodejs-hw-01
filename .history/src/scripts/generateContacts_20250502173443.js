import { createFakeContacts } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  for (let i = 0; i < count; i++) {
    contacts.push(createFakeContacts());
  }
  await writeContacts(contacts);
};
generateContacts(5);
