import PropTypes from 'prop-types';
export default function Filter({ onChange, value }) {
  return (
    <label htmlFor="filter">
      Find contacts by name
      <input type="text" name="filter" onChange={onChange} value={value} />
    </label>
  );
}
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
