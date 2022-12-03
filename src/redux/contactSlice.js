import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from '../redux/operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchContacts.fulfiled]: (state, action) => {
      return { ...state, items: action.payload };
    },
    [fetchContacts.pending]: state => {
      return { ...state, isLoading: true };
    },
    [fetchContacts.rejected]: (state, action) => {
      return { ...state, error: action.payload };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const getContacts = state => state.contacts;
