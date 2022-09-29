import { Component } from 'react';
import FormAddContact from './FormAddContact';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

export default class MyPhonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    if (this.isDublicate(contact)) {
      return alert(
        `${contact.name} - ${contact.number} is already in contacts.`
      );
    }
    this.setState(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return {
        contacts: [...prev.contacts, newContact],
      };
    });
  };
  removeContact = id => {
    this.setState(prev => {
      const newContact = prev.contacts.filter(item => item.id !== id);
      return { contacts: newContact };
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  isDublicate({ name, number }) {
    const { contacts } = this.state;

    const result = contacts.find(
      item => item.name === name && item.number === number
    );

    return result;
  }

  getFilteredContacts() {
    const { contacts, filter } = this.state;
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
  }

  render() {
    const { addContact, removeContact, handleChange } = this;
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <FormAddContact onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter onChange={handleChange} value={filter} />
        <ContactsList items={contacts} removeContact={removeContact} />
      </div>
    );
  }
}
