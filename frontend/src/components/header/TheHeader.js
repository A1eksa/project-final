import React from 'react';
import { useSelector } from 'react-redux';
// import user from '../../reducers/user';
import { OpenModalToggle } from '../small components/OpenModalToggle';

import {
  HeaderWrapper,
  User,
  H1,
  // LogOutButton,
} from './_HeaderStyles';

export const TheHeader = () => {
  const loggedInUser = useSelector((store) => store.user.username);

  // const dispatch = useDispatch();

  // const handleLogout = () => {
  //     dispatch(user.actions.logout());
  //     localStorage.removeItem('user');
  //   };

  return (
    <HeaderWrapper>
      <User>
        <H1>Hello {loggedInUser}!</H1>
        {/* <LogOutButton onClick={handleLogout}>SIGN OUT</LogOutButton> */}
      </User>
      <OpenModalToggle />
    </HeaderWrapper>
  );
};
