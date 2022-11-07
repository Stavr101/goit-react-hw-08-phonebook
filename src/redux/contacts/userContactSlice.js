import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const userContactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },

    removeContact: (store, { payload }) =>
      store.filter(({ id }) => id !== payload),
  },
});

export const { addContact, removeContact } = userContactSlice.actions;
export const userContacts = userContactSlice.reducer;
