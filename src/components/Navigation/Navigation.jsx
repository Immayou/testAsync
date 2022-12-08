import { useAuth } from '../../hooks/useAuth';
import { HeaderButton } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <HeaderButton to="/">Home</HeaderButton>
      {isLoggedIn && (
        <HeaderButton style={{ marginLeft: '30px' }} to="/contacts">
          Contacts
        </HeaderButton>
      )}
    </>
  );
};
