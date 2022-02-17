import React from 'react';
import styled from 'styled-components';
import deleteIcon from '../../utils/deleteIcon.svg';

export const IconWrapper = styled.img`
  width: 16px;
  height: 16px;
`;


export const DeleteIcon = () => {
  return <IconWrapper src={deleteIcon}></IconWrapper>
};
