import { Outlet } from 'react-router-dom';
import { Header } from './SharedAppBar.styled';
import * as React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';

export const SharedAppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Outlet />
    </>
  );
};

// import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
// import {
//   AppBar,
//   NavItem,
//   ImHomeIcon,
//   ImVideoCameraIcon,
// } from './SharedLayout.styled';

// export const SharedLayout = () => {
//   return (
//     <>
//       <AppBar>
//         <nav>
//           <NavItem to="/" end="true">
//             <ImHomeIcon />
//             Home
//           </NavItem>
//           <NavItem to="/movies">
//             <ImVideoCameraIcon />
//             Movies
//           </NavItem>
//         </nav>
//       </AppBar>
//       <Suspense fallback={null}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };

// <Header>
//   <Navigation />
//   {isLoggedIn ? <UserMenu /> : <AuthNav />}
// </Header>
// <Outlet />
