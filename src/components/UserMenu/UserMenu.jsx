import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/authOperations';
import { useAuth } from '../../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = e => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>Welcome, {user.email}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
