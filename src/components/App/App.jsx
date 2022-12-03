import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from '../../redux/contactSlice';

import ContainerBox from '../ContainerBox/ContainerBox';

import Box from '../Box/Box';

import ContactForm from '../ContactForm/ContactForm';

import ContactList from '../ContactList/ContactList';

import Filter from '../Filter/Filter';
import { fetchContacts } from '../../redux/operations';

import { Wrapper, ContactsTitle } from './App.styled';
import { useEffect } from 'react';

export const App = () => {
  const addedContacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const isArrayOfContactsEmpty = addedContacts.length !== 0;

  return (
    <Wrapper>
      <ContainerBox>
        <Box>
          <ContactForm />
          {isArrayOfContactsEmpty && (
            <div>
              <ContactsTitle>Contacts</ContactsTitle>
              {/* <Filter />
              <ContactList /> */}
            </div>
          )}
        </Box>
      </ContainerBox>
    </Wrapper>
  );
};
