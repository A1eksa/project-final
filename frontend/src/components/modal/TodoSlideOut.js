import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TodoEditForm } from '../todo/TodoEditForm';
import './SlideOut.css';
import editTodoModal from '../../reducers/editTodoModal';

import {
  P,
  CloseToggle,
  // SlideOutWrapper,
  // OpenToggleWrapper,
  CloseToggleWrapper,
} from './_ModalStyles';

export const TodoSlideOut = () => {
  const editTodoSlideout = useSelector(
    (store) => store.editTodoModal.editTodoSlideout
  );

  const dispatch = useDispatch();

  const closeEditTodoSlideOut = () => {
    // dispatch modal.actions.setSlideout
    dispatch(editTodoModal.actions.setEditTodoSlideout(false));
  };

  return (
    <>
      <div className={editTodoSlideout ? 'modal active' : 'modal'}>
        <CloseToggleWrapper>
          <P>Close</P>
          <CloseToggle className='close-button' onClick={closeEditTodoSlideOut}>
            +
          </CloseToggle>
        </CloseToggleWrapper>
        <TodoEditForm />
      </div>
    </>
  );
};
