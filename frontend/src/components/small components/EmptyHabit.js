import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaSeedling } from 'react-icons/fa';

export const EmptyHabit = () => {
  return (
    <EmptyState>
      <Label>You don't have any habits</Label>
      <H4>Let's create some!</H4>
      <P>Click the green button in the upper right corner. Good luck!</P>
      <IconContext.Provider
        value={{
          color: '#444444',
          className: 'global-class-name',
          size: '4rem',
          style: { verticalAlign: 'middle', marginLeft: '0.05rem' },
        }}
      >
        <FaSeedling />
      </IconContext.Provider>
    </EmptyState>
  );
};

const EmptyState = styled.div`
  min-height: 190px;
  padding: 3rem;
  border-radius: 10px;
`;

const H4 = styled.h4`
  font-size: 2rem;
  line-height: 2rem;
  color: var(--text-secondary);
  font-weight: 200;
  margin: 0.5rem 0;
`;

const P = styled.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  font-weight: 200;
  margin: 1rem 0;
`;

const Label = styled.p`
  font-size: 14;
  color: var(--text-secondary);
  font-weight: 300;
  margin: 0;
`;
