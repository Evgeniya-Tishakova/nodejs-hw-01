import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const allCount = await readContacts();
    return allCount.length;
  } catch (error) {
    console.error(error.message);
  }
};

console.log(await countContacts());
