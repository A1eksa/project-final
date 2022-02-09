import React from 'react';
import { useSelector } from 'react-redux';
import { OpenModalToggle } from '../small components/OpenModalToggle';
// import { TimeTicker } from '../small components/TimeTicker';

import { HeaderWrapper, User, H1 } from './_HeaderStyles';

export const TheHeader = () => {
  const loggedInUser = useSelector((store) => store.user.username);

  return (
    <HeaderWrapper>
      <User>
        <H1>Hello {loggedInUser}!</H1>
      </User>
      {/* <TimeTicker /> */}
      <OpenModalToggle />
    </HeaderWrapper>
  );
};
