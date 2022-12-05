import { NavLink, Outlet } from 'react-router-dom';
import { Header } from './SharedAppBar.styled';
import * as React from 'react';

export const SharedAppBar = () => {
  return (
    <>
      <Header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {/* <Link to="contacts">Contacts</Link> */}
          <NavLink to="registration">Register</NavLink>
          <NavLink to="login">Log in</NavLink>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};
