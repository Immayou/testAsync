import { HeaderButton } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div style={{ display: 'block', marginLeft: 'auto' }}>
      <HeaderButton style={{ marginRight: '30px' }} to="registration">
        Register
      </HeaderButton>
      <HeaderButton to="login">Log in</HeaderButton>
    </div>
  );
};
