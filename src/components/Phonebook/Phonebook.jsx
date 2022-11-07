import { FormAddContact } from './FormAddContact';
import { ContactsList } from './ContactsList';
import Filter from './Filter';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/userContactSlice';

import { setFilter } from 'redux/filters/filtersSlice';

export default function Phonebook() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Phonebook</h1>
      <FormAddContact onSubmit={() => dispatch(addContact)} />

      <h2>Contacts</h2>
      <Filter onChange={() => dispatch(setFilter)} />
      <ContactsList />
    </div>
  );
}
