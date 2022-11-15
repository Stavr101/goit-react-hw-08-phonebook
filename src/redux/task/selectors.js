import { getFilter } from 'redux/filters/filterSelector';

export const selectLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.filter;
export const selectAllContacts = state => state.contacts.items;
export const getContacts = state => state.contacts;

export const getFilteredContacts = (items, filter) => {
  //   console.log('state', state);
  //   console.log('contacts', contacts);

  //   const filter = getFilter(state);
  //   console.log(filter);
  if (!filter) {
    return items;
  }

  const normalaisedFilter = filter.toLocaleLowerCase();
  const filteredContacts = items.filter(({ name, number }) => {
    const normalaisedName = name.toLocaleLowerCase();
    const result =
      normalaisedName.includes(normalaisedFilter) ||
      number.includes(normalaisedFilter);
    return result;
  });
  console.log(filteredContacts);
  return filteredContacts;
};
