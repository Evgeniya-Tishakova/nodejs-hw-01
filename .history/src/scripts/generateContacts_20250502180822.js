import { createFakeContacts } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const prevContacts = await readContacts();
    let contacts = [];

    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContacts());
    }

    const newContacts = [...prevContacts, ...contacts];
    await writeContacts(newContacts);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
