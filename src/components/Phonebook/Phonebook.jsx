import FormAddContact from './FormAddContact';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { useDispatch } from 'react-redux';
import { addContact, removeContact } from 'redux/contacts/userContactSlice';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/useContactSelector';
import { getFilter } from 'redux/filters/filterSelector';
import { setFilter } from 'redux/filters/filtersSlice';

export default function Phonebook() {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onAddContact = contact => {
    if (isDublicate(contact)) {
      return alert(
        `${contact.name} - ${contact.number} is already in contacts.`
      );
    }
    const action = addContact(contact);
    dispatch(action);
  };
  const onRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const isDublicate = ({ name, number }) => {
    const result = contacts.find(
      item => item.name === name && item.number === number
    );
    return result;
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <FormAddContact onSubmit={onAddContact} />

      <h2>Contacts</h2>
      <Filter onChange={handleChange} value={filter} />
      <ContactsList items={contacts} removeContact={onRemoveContact} />
    </div>
  );
}
