import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addNewContact,
  removeContact,
} from '../redux/operations';

const extraActions = [fetchContacts, addNewContact, removeContact];

const getActions = type => extraActions.map(action => action[type]);

const fetchContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
};

const addNewContactSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};

const removeContactSuccessReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addNewContact.fulfilled, addNewContactSuccessReducer)
      .addCase(removeContact.fulfilled, removeContactSuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledReducer);
  },
});

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;