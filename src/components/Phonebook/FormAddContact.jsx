import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function FormAddContact({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const options = { name: setName, number: setNumber };

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = ({ target: { name, value } }) => {
    options[name](value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <label htmlFor={nameId}>
        Name
        <input
          id={nameId}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={numberId}>
        Number
        <input
          id={numberId}
          value={number}
          onChange={handleChange}
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
}

FormAddContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
