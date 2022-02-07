import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import user from '../../reducers/user';

import { StyledFooter, MadeByWrapper, P, LogOutButton } from './_FooterStyles';

export const Footer = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    Swal.fire({
      title: 'You are logged out!',
      showCancelButton: false,
      confirmButtonColor: 'var(--accent-green)',
      confirmButtonBorder: false,
      background: 'var(--level-three)',
      color: 'var(--text-primary)',
      confirmButtonText: 'See you soon!',
    });
    dispatch(user.actions.logout());
    localStorage.removeItem('user');
  };

  return (
    <StyledFooter>
      <MadeByWrapper>
        <P>Aleksa & Jessi 2022</P>
      </MadeByWrapper>
      <LogOutButton onClick={handleLogout}>SIGN OUT</LogOutButton>
    </StyledFooter>
  );
};
