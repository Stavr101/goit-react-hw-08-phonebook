import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filters/filterSelector';
import { setFilter } from 'redux/filters/filtersSlice';
// import { getFilteredContacts } from 'redux/task/selectors';
import style from './Filter.module.css';
// import { getFilteredContacts } from 'redux/task/selectors';
export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    // console.log(value);
    dispatch(setFilter(value));
    // getFilteredContacts(value);
  };
  return (
    <div className={style.FilterContainer}>
      <label htmlFor="filter">
        Find contacts by name
        <input
          className={style.FilterInput}
          type="text"
          name="filter"
          onChange={handleChange}
          value={filter}
        />
      </label>
    </div>
  );
};
