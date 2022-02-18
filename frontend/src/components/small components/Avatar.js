import React from 'react';
import styled from 'styled-components';
import avatar from '../../utils/avatar.png';


export const Avatar = () => {
  return <StyledAvatar src={avatar}></StyledAvatar>;
};

// S T Y L I N G //

export const StyledAvatar = styled.img`
  width: 56px;
  height: 56px;
  //   border-radius: 50%;
  //background-color: pink;

  @media (max-width: 767px) {
    width: 48px;
    height: 48px;
  }
`;
