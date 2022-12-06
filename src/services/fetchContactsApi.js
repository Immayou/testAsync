import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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

export async function editContactApi(contact) {
  const { data } = await axios.patch(`/contacts/${contact.id}`, {
    name: `${contact.name}`,
    number: `${contact.number}`,
  });

  return data;
}
