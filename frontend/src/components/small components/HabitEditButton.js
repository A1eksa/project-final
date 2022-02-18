import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiTwotoneEdit } from 'react-icons/ai';

import editModal from '../../reducers/editModal';


export const HabitEditButton = () => {
  const dispatch = useDispatch();

  const editHabit = () => {
    dispatch(editModal.actions.setEditSlideout(true));
  };

  return (
    <IconContext.Provider
      value={{
        color: '#444444',
        className: 'global-class-name',
        size: '1.125rem',
        style: { verticalAlign: 'middle', marginLeft: '0.05rem' },
      }}
    >
      <Button onClick={() => editHabit()}>
        <AiTwotoneEdit />
      </Button>
    </IconContext.Provider>
  );
};


// S T Y L I N G //

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  color: var(--text-primary);
  font-family: Raleway;
  font-size: 1rem;
  font-weight: 300;
  margin-right: 0.5rem;
  transition: 0.4s;
  border: none;
  max-width: 200px;
  background-color: var(--accent-yellow);
  :hover {
    background-color: #f1f1f1;
    color: var(--text-primary);
    cursor: pointer;
  }
`;
