import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApiSlice';
import { filterReducer } from './filters/filtersSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
