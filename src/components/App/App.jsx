import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../../redux/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { SharedAppBar } from '../SharedAppBar/SharedAppBar';
import { Home } from '../../pages/Home/Home';
import { Registration } from '../../pages/Registration/Registration';
import { LogIn } from '../../pages/LogIn/LogIn';
import { Contacts } from '../../pages/Contacts/Contacts';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';

export const App = () => {
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
