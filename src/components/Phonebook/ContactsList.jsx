import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/useContactSelector';
import { removeContact } from 'redux/contacts/userContactSlice';

export const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };

  const elements = contacts.map(({ name, id, number }) => {
    return (
      <li key={id}>
        {name}: {number}
        <button onClick={() => onRemoveContact(id)}>Delete</button>
      </li>
    );
  });
  return <ul>{elements}</ul>;
};
