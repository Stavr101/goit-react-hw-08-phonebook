export const getContacts = store => store.contacts;

export const getFilteredContacts = ({ filter, contacts }) => {
  if (!filter) {
    return contacts;
  }

  const normalaisedFilter = filter.toLocaleLowerCase();
  const filteredContacts = contacts.filter(({ name, number }) => {
    const normalaisedName = name.toLocaleLowerCase();
    const normalaisedNumber = number.toLocaleLowerCase();
    const result =
      normalaisedName.includes(normalaisedFilter) ||
      normalaisedNumber.includes(normalaisedFilter);
    return result;
  });
  return filteredContacts;
};
