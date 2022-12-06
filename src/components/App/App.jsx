import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getIsLoading, getError } from '../../redux/contactSlice';
import { fetchContacts } from '../../redux/operations';
import { SharedAppBar } from '../SharedAppBar/SharedAppBar';
import { Home } from '../../pages/Home/Home';
import { Registration } from '../../pages/Registration/Registration';
import { LogIn } from '../../pages/LogIn/LogIn';
import { Contacts } from '../../pages/Contacts/Contacts';
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
  NoContactsSectionTitle,
  ErrorSectionTitle,
  ErrorSectionText,
} from '../App/App.styled';
import { refreshUser } from '../../redux/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';

export const App = () => {
  // const addedContacts = useSelector(getContacts);
  // const isLoading = useSelector(getIsLoading);
  // const isError = useSelector(getError);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // const isNotContactListEmpty = addedContacts.length > 0;

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<SharedAppBar />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LogIn} redirectTo="/contacts" />
            }
          />
          <Route
            path="/registration"
            element={
              <RestrictedRoute
                component={Registration}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={Contacts} redirectTo="/login" />}
          />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    )
  );
};

//   return (
//     <Layout>
//       <MainWrapper>
//         <TopBox>
//           <ContactForm />
//         </TopBox>
//         {isNotContactListEmpty && (
//           <BottomBox>
//             <div>
//               <ContactsTitle>Contacts</ContactsTitle>
//               <Filter />
//               <ContactList />
//             </div>
//           </BottomBox>
//         )}
//         {!isNotContactListEmpty && !isError && !isLoading && (
//           <BottomBox>
//             <div>
//               <NoContactsSectionTitle>No contacts yet!</NoContactsSectionTitle>
//               <img src={emptyPhonebookImg} alt="No contacts" width={100} />
//             </div>
//           </BottomBox>
//         )}
//         {isError && !isLoading && (
//           <BottomBox>
//             <div>
//               <ErrorSectionTitle>
//                 Sorry, something went wrong!
//               </ErrorSectionTitle>
//               <ErrorSectionText style={{ marginBottom: '10px' }}>
//                 Error loading the contacts
//               </ErrorSectionText>
//               <img src={errorImg} alt="Error" width={100} />
//             </div>
//           </BottomBox>
//         )}
//       </MainWrapper>
//     </Layout>
//   );
// };
