// // import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { TaskList } from 'components/TaskList/TaskList';
// // import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// // import { fetchTasks } from 'redux/tasks/operations';
// // import { selectLoading } from 'redux/tasks/selectors';

// // export default function Tasks() {
// //   const dispatch = useDispatch();
// //   const isLoading = useSelector(selectLoading);

// //   useEffect(() => {
// //     dispatch(fetchTasks());
// //   }, [dispatch]);

// //   return (
// //     <>
// //       <TaskEditor />
// //       <div>{isLoading && 'Request in progress...'}</div>
// //       <TaskList />
// //     </>
// //   );
// // }

// import { ContactsList } from 'components/Phonebook/ContactsList';
// import { Filter } from 'components/Phonebook/Filter';
// import { FormAddContact } from 'components/Phonebook/FormAddContact';
// import { useEffect } from 'react';
// import { useGetContactsQuery } from 'redux/contactsApiSlice';
// import { userContacts } from '../redux/contacts/userContactSlice';
// export default function Phonebook() {
//   console.log(useGetContactsQuery());
//   const dispatch = useDispatch();
//   //   const isLoading = useSelector(selectLoadin);

//   useEffect(() => {
//     dispatch(userContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <FormAddContact />

//       <h2>Contacts</h2>
//       <Filter />
//       <ContactsList />
//     </div>
//   );
// }
