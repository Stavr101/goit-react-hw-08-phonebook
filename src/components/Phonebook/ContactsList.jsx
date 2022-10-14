import PropTypes from 'prop-types';

export default function ContactsList({ items, removeContact }) {
  // console.log(items);
  const elements = items.map(({ name, id, number }) => {
    return (
      <li key={id}>
        {name}: {number}
        <button onClick={() => removeContact(id)}>Delete</button>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}

ContactsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  removeContact: PropTypes.func.isRequired,
};
