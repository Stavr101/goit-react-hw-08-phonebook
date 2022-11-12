import {
  useAddContactsMutation,
  useGetContactsQuery,
} from 'redux/contactsApiSlice';
import Loader from 'shared/loader/Loader';

export const FormAddContact = () => {
  const { data } = useGetContactsQuery();
  // console.log(data);
  const [addContact, { isLoading }] = useAddContactsMutation();

  const handleAddContacts = async event => {
    event.preventDefault();
    const form = event.currentTarget;

    const { name, phone } = form;
    const contact = {
      name: name.value,
      phone: phone.value,
    };

    data.find(
      data => data.name === contact.name || data.phone === contact.phone
    )
      ? alert(`${contact.name} - ${contact.phone} is already in contacts.`)
      : addContact(contact);

    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleAddContacts}>
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
      <label htmlFor="phone">
        Phone
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading && <Loader />}
        Add contact
      </button>
    </form>
  );
};
