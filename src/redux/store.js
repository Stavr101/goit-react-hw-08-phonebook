import { configureStore } from '@reduxjs/toolkit';
import { userContacts } from './contacts/userContactSlice';
import { filterReducer } from './filters/filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: userContacts,
    filter: filterReducer,
  },
});
export default store;
