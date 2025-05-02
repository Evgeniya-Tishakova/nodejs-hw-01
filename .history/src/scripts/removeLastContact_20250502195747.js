import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const newContacts = await readContacts();
    if (newContacts.length === 0) {
      console.log('контакти відсутні');
      return;
    }

    const removedContact = newContacts.pop();
    await writeContacts(newContacts);
    console.log(removedContact);
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error.message);
  }
};

removeLastContact();
