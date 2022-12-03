import axios from 'axios';

axios.defaults.baseURL = 'https://637fd9372f8f56e28e979dde.mockapi.io';

export async function fetchContactsApi() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addNewContactApi(newContact) {
  const { data } = await axios.post('/contacts', newContact);
  return data;
}

export async function deleteContactApi(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}
