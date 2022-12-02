import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from '../../redux/contactSlice';
import { getFilterValue } from '../../redux/filterSlice';
import {
  ListOfContacts,
  ContactItem,
  NameInfo,
  NumberInfo,
  DeleteButton,
} from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const addedContacts = useSelector(getContacts);
  const enteredFilterValue = useSelector(getFilterValue);

  const getFiltredContacts = () => {
    const normalizeFilter = enteredFilterValue.toLowerCase();
    const visibleContacts = addedContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
    return visibleContacts;
  };

  const contactsToRender = getFiltredContacts();

  return (
    <ListOfContacts>
      {contactsToRender.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <div>
            <NameInfo>{name}: </NameInfo>
            <NumberInfo>{number}</NumberInfo>
          </div>
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ListOfContacts>
  );
};

export default ContactList;
