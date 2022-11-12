// import { useGetContactsQuery } from 'redux/contactsApiSlice';

// export const filteredContacts = () => {
//   const { data } = useGetContactsQuery();
//   console.log(data);
//   if (!filter) {
//     return contacts;
//   }
//   console.log(contacts);
//   const normalaisedFilter = filter.toLocaleLowerCase();
//   const filteredContacts = contacts.filter(({ name, phone }) => {
//     const normalaisedName = name.toLocaleLowerCase();
//     const normalaisedNumber = phone.toLocaleLowerCase();
//     const result =
//       normalaisedName.includes(normalaisedFilter) ||
//       normalaisedNumber.includes(normalaisedFilter);
//     return result;
//   });
//   // console.log(filteredContacts);
//   return filteredContacts;
// };
