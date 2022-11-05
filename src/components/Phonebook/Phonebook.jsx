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
  // const [contacts, setContacts] = useState(() => {
  //   const value = JSON.parse(localStorage.getItem('contacts'));
  //   return value ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const onAddContact = contact => {
    console.log(contact);
    if (isDublicate(contact)) {
      return alert(
        `${contact.name} - ${contact.number} is already in contacts.`
      );
    }
    const action = addContact(contact);
    dispatch(action);

    // setContacts(prev => {
    //   const newContact = {
    //     id: nanoid(),
    //     ...contact,
    //   };
    //   return [...prev, newContact];
    // });
  };
  const onRemoveContact = id => {
    // setContacts(prev => {
    //   const newContact = prev.filter(item => item.id !== id);
    //   return newContact;
    // });
    const action = removeContact(id);
    dispatch(action);
  };

  const handleChange = e => {
    console.log(e.target);
    const { value } = e.target;
    dispatch(setFilter(value));
    // setFilter(value);
  };

  const isDublicate = ({ name, number }) => {
    const result = contacts.find(
      item => item.name === name && item.number === number
    );
    return result;
  };

  // const getFilteredContacts = () => {
  //   if (!filter) {
  //     return contacts;
  //   }

  //   const normalaisedFilter = filter.toLocaleLowerCase();
  //   const filteredContacts = contacts.filter(({ name, number }) => {
  //     const normalaisedName = name.toLocaleLowerCase();
  //     const normalaisedNumber = number.toLocaleLowerCase();
  //     const result =
  //       normalaisedName.includes(normalaisedFilter) ||
  //       normalaisedNumber.includes(normalaisedFilter);
  //     return result;
  //   });
  //   return filteredContacts;
  // };

  // const filteredContacts = getFilteredContacts();

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
