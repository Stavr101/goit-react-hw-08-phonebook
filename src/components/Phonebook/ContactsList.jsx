import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/useContactSelector';
import {
  useDeleteContactsMutation,
  useGetContactsQuery,
} from 'redux/contactsApiSlice';

export const ContactsList = () => {
  const [deleteContact, result] = useDeleteContactsMutation();
  const { data } = useGetContactsQuery();
  const contacts = useSelector(state => getFilteredContacts(state, data));

  const onRemoveContact = id => {
    deleteContact(id);
  };
  if (data) {
    const elements = contacts.map(({ name, id, phone }) => {
      return (
        <li key={id}>
          {name}: {phone}
          <button
            type="button"
            onClick={() => onRemoveContact(id)}
            disabled={result.isLoading}
          >
            Delete
          </button>
        </li>
      );
    });

    return <ul>{elements}</ul>;
  }
};
