import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userContacts } from './contacts/userContactSlice';
import { filterReducer } from './filters/filtersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contact',
  storage,
};
const reducer = combineReducers({
  contacts: userContacts,
  filter: filterReducer,
});
const persistContactReducer = persistReducer(contactsPersistConfig, reducer);

export const store = configureStore({
  reducer: persistContactReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
