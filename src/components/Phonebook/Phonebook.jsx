import FormAddContact from './FormAddContact';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

export default function Phonebook() {
  const [contacts, setContacts] = useState(() => {
    const value = JSON.parse(localStorage.getItem('contacts'));
    return value ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    if (isDublicate(contact)) {
      return alert(
        `${contact.name} - ${contact.number} is already in contacts.`
      );
    }
    setContacts(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return [...prev, newContact];
    });
  };
  const removeContact = id => {
    setContacts(prev => {
      const newContact = prev.filter(item => item.id !== id);
      return newContact;
    });
  };

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const isDublicate = ({ name, number }) => {
    const result = contacts.find(
      item => item.name === name && item.number === number
    );

    return result;
  };

  const getFilteredContacts = () => {
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

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <FormAddContact onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter onChange={handleChange} value={filter} />
      <ContactsList items={filteredContacts} removeContact={removeContact} />
    </div>
  );
}
