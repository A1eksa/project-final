import React from 'react';
import { useDispatch } from 'react-redux';

import user from '../../reducers/user';



import { 
    StyledFooter,
    MadeByWrapper,
    P,
    LogOutButton,
  } from './_FooterStyles'


export const Footer = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
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
    )
}