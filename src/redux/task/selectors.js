import { getFilter } from 'redux/filters/filterSelector';

export const selectLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.contacts.filter;
export const selectAllContacts = state => state.contacts.items;
export const getContacts = state => state.contacts;

export const getFilteredContacts = (state, contacts) => {
  //   console.log('state', state);
  console.log('contacts', contacts);

  const filter = getFilter(state);
  console.log(filter);
  if (!filter) {
    return contacts;
  }

  const normalaisedFilter = filter.toLocaleLowerCase();
  const filteredContacts = contacts.filter(({ name, number }) => {
    const normalaisedName = name.toLocaleLowerCase();
    const result =
      normalaisedName.includes(normalaisedFilter) ||
      number.includes(normalaisedFilter);
    return result;
  });
  console.log(filteredContacts);
  return filteredContacts;
};
