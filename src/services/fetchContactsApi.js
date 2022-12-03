import axios from 'axios';

axios.defaults.baseURL = 'https://mockapi.io/projects/637fd9372f8f56e28e979ddf';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}
