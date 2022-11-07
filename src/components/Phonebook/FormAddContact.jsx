import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/useContactSelector';
import { addContact } from 'redux/contacts/userContactSlice';

export const FormAddContact = () => {
  const dispatch = useDispatch();
  const items = useSelector(getFilteredContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, number } = form;

    const contact = {
      name: name.value,
      number: number.value,
    };

    items.find(
      item => item.name === contact.name || item.number === contact.number
    )
      ? alert(`${contact.name} - ${contact.number} is already in contacts.`)
      : dispatch(addContact(contact));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button>Add contact</button>
    </form>
  );
};
