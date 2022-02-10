import React from 'react';
import { useDispatch } from 'react-redux';

import { TimeTicker } from '../small components/TimeTicker';
import { DarkMode } from '../theme/DarkMode';
import Swal from 'sweetalert2';

import user from '../../reducers/user';

import { StyledFooter, LogOutButton, RightWrapper } from './_FooterStyles';

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
      <DarkMode />
      <RightWrapper>
        <TimeTicker />
        <LogOutButton onClick={handleLogout}>SIGN OUT</LogOutButton>
      </RightWrapper>
    </StyledFooter>
  );
};
