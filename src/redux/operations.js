import * as contactsAPI from '../services/fetchContactsApi';
import * as contactsActions from './actions';

export const fetchContactsRequest = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await contactsAPI.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.message));
  }
};
