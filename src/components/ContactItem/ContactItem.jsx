import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TiContacts } from 'react-icons/ti';
import { notifySuccessDeletedInfo } from '../../../src/notificationMessages/notificationMessages';
import { getIsLoading } from '../../redux/contactSlice';
import { Modal } from '../Modal/Modal';
import {
  ContactSimpleItem,
  NameInfo,
  NumberInfo,
  ContactButton,
} from './ContactItem.styled';
import { removeContact } from '../../redux/operations';

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isLoading = useSelector(getIsLoading);

  const onDeleteContactHandler = () => {
    try {
      dispatch(removeContact(item.id));
      notifySuccessDeletedInfo(item.name);
    } catch (error) {
      console.log(error);
    }
  };

  const onEditButtonHandlerClick = e => {
    e.preventDefault();
    setIsOpenModal(true);
  };

  const onModalClose = async () => {
    setIsOpenModal(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <ContactSimpleItem>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TiContacts size={30} style={{ marginRight: '10px' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NameInfo>{item.name}: </NameInfo>
            <NumberInfo>{item.phone}</NumberInfo>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <ContactButton
            type="button"
            style={{ marginRight: '5px' }}
            onClick={onEditButtonHandlerClick}
          >
            Edit
          </ContactButton>
          <ContactButton
            type="button"
            disabled={isLoading}
            onClick={onDeleteContactHandler}
          >
            {isLoading ? 'Deleting' : 'Delete'}
          </ContactButton>
        </div>
      </ContactSimpleItem>
      {isOpenModal && <Modal onModalClose={onModalClose} dataContact={item} />}
    </>
  );
};
