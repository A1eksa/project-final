import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import modal from '../../reducers/modal';

export const P = styled.p`
  margin: 0 1rem 0 0;
`;

export const OpenModalToggle = () => {
  const dispatch = useDispatch();

  // const showSlideOut = () => {
  //       dispatch(modal.actions.setSlideout(true));
  //     };

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

export const OpenToggleWrapper = styled.div`
  background-color: transparent;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: flex-end;
  // margin-right: 1.5rem;
`;

export const OpenToggle = styled.button`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: var(--accent-green);
  color: var(--text-primary);
  font-size: 3rem;
  line-height: 2rem;
  font-family: Raleway;
  font-weight: 200;
  border: none;
  transition: 0.3s;
  :hover {
    background-color: #f1f1f1;
    color: var(--text-primary);
    cursor: pointer;
    transform: rotate(360deg);
  }
`;