import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifySuccessAddedContactInfo = text => {
  toast.success(`Contact "${text}" is added to contacts!`);
};

export const notifySuccessRemovedInfo = text => {
  toast.info(`Contact "${text}" is deleted from contacts!`);
};

export const notifySuccessEditedInfo = text => {
  toast.info(`Contact "${text}"  is edited!`);
};

export const notifyErrorIfNewContactAlreadyExists = text => {
  toast.error(`Contact "${text}" already exists in contacts!`);
};

export const notifyError = () => {
  toast.error(`Sorry, something went wrong!`);
};
