import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import modal from '../../reducers/modal';

export const OpenModalToggle = () => {
  const dispatch = useDispatch();

  const showSlideOut = () => {
    dispatch(modal.actions.setSlideout(true));
  };
  return (
    <OpenToggleWrapper>
      <P>Add todo/habit</P>
      <OpenToggle onClick={showSlideOut}>+</OpenToggle>
    </OpenToggleWrapper>
  );
};

// S T Y L I N G //

export const P = styled.p`
  margin: 0 1rem 0 0;
  color: var(--text-primary);
`;

export const OpenToggleWrapper = styled.div`
  background-color: transparent;
  // height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OpenToggle = styled.button`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background-color: var(--accent-green);
  color: var(--grey-600);
  font-size: 3rem;
  line-height: 2rem;
  font-family: Raleway;
  font-weight: 200;
  border: none;
  transition: 0.3s;
  :hover {
    background-color: var(--openbuttonhover);
    color: var(--text-primary);
    cursor: pointer;
    transform: rotate(360deg);
  }

  @media (max-width: 767px) {
    height: 44px;
    width: 44px;
    border-radius: 22px;
  }
`;
