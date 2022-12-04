import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getIsLoading, getError } from '../../redux/contactSlice';
import { fetchContacts } from '../../redux/operations';
import TopBox from '../TopBox/TopBox';
import BottomBox from '../BottomBox/BottomBox';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import errorImg from '../../images/error.png';
import emptyPhonebookImg from '../../images/no_contacts.png';
import {
  MainWrapper,
  ContactsTitle,
  Layout,
  Header,
  NoContactsSectionTitle,
  ErrorSectionTitle,
  ErrorSectionText,
} from '../App/App.styled';

export const App = () => {
  const addedContacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isNotContactListEmpty = addedContacts.length > 0;

  return (
    <Layout>
      <Header>
        <button>Home</button>
        <button>Register</button>
        <button>Log in</button>
      </Header>
      <MainWrapper>
        <TopBox>
          <ContactForm />
        </TopBox>
        {isNotContactListEmpty && (
          <BottomBox>
            <div>
              <ContactsTitle>Contacts</ContactsTitle>
              <Filter />
              <ContactList />
            </div>
          </BottomBox>
        )}
        {!isNotContactListEmpty && !isError && !isLoading && (
          <BottomBox>
            <div>
              <NoContactsSectionTitle>No contacts yet!</NoContactsSectionTitle>
              <img src={emptyPhonebookImg} alt="No contacts" width={100} />
            </div>
          </BottomBox>
        )}
        {isError && !isLoading && (
          <BottomBox>
            <div>
              <ErrorSectionTitle>
                Sorry, something went wrong!
              </ErrorSectionTitle>
              <ErrorSectionText style={{ marginBottom: '10px' }}>
                Error loading the contacts
              </ErrorSectionText>
              <img src={errorImg} alt="Error" width={100} />
            </div>
          </BottomBox>
        )}
      </MainWrapper>
    </Layout>
  );
};

// <Wrapper>
//       <ContainerBox>
//         <Box>
//           <ContactForm />
//           {isArrayOfContactsEmpty && (
//             <div>
//               <ContactsTitle>Contacts</ContactsTitle>
//               <Filter />
//               <ContactList />
//             </div>
//           )}
//         </Box>
//       </ContainerBox>
//     </Wrapper>
