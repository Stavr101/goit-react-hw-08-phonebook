// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
import { ContactsList } from 'components/Phonebook/ContactsList';
import { Filter } from 'components/Phonebook/Filter';
import { FormAddContact } from 'components/Phonebook/FormAddContact';
// import { ContactEditor } from 'components/TaskEditor/TaskEditor';
// import { TaskList } from 'components/TaskList/TaskList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/task/operations';
// import { selectLoading } from 'redux/task/selectors';
// import { selectLoading } from 'redux/tasks/selectors';
import styles from './Task.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {' '}
      <div className={styles.section}>
        <h1 className={styles.title}>PHONEBOOK APP</h1>
        {/* <h1>Phonebook</h1> */}
        <FormAddContact />
        <h2 className={styles.title}>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
      {/* <ContactEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList /> */}
    </>
  );
}

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';

// export default function Tasks() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

//   return (
//     <>
//       <TaskEditor />
//       <div>{isLoading && 'Request in progress...'}</div>
//       <TaskList />
//     </>
//   );
// }
