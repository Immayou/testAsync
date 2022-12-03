import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContactsApi,
  addNewContactApi,
  deleteContactApi,
} from '../services/fetchContactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContactsApi();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const contact = await addNewContactApi(newContact);
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const contactToDelete = await deleteContactApi(contactId);
      return contactToDelete;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
