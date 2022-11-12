import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filters/filterSelector';
import { setFilter } from 'redux/filters/filtersSlice';
export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;

    dispatch(setFilter(value));
  };
  return (
    <label htmlFor="filter">
      Find contacts by name
      <input type="text" name="filter" onChange={handleChange} value={filter} />
    </label>
  );
};
