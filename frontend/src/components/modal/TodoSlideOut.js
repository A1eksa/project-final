import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TodoEditForm } from '../forms/TodoEditForm';
import './SlideOut.css';
import editModal from '../../reducers/editModal';

import { P, CloseToggle, CloseToggleWrapper } from './_ModalStyles';

export const TodoSlideOut = () => {
  const editTodoSlideout = useSelector(
    (store) => store.editModal.editTodoSlideout
  );

  const dispatch = useDispatch();

  const closeEditTodoSlideOut = () => {
    dispatch(editModal.actions.setEditTodoSlideout(false));
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
        {editTodoSlideout && <TodoEditForm />}
      </div>
    </>
  );
};
