import { getFilter } from 'redux/filters/filterSelector';

export const getContacts = store => store.contacts;

export const getFilteredContacts = (state, contacts) => {
  const filter = getFilter(state);
  if (!filter) {
    return contacts;
  }
  // console.log(contacts);
  // console.log(filter);
  const normalaisedFilter = filter.toLocaleLowerCase();
  const filteredContacts = contacts.filter(({ name, phone }) => {
    const normalaisedName = name.toLocaleLowerCase();
    const result =
      normalaisedName.includes(normalaisedFilter) ||
      phone.includes(normalaisedFilter);
    return result;
  });
  console.log(filteredContacts);
  return filteredContacts;
};
