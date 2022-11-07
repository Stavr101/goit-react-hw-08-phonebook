import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filters/filtersSlice';
export default function Filter({ onChange, value }) {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;

    dispatch(setFilter(value));
  };
  return (
    <label htmlFor="filter">
      Find contacts by name
      <input type="text" name="filter" onChange={handleChange} value={value} />
    </label>
  );
}
