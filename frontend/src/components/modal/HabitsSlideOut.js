import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HabitEditForm } from '../habits/HabitEditForm';
import './SlideOut.css';
import editModal from '../../reducers/editModal';

import {
  P,
  CloseToggle,
  // SlideOutWrapper,
  // OpenToggleWrapper,
  CloseToggleWrapper,
} from './_ModalStyles';

// const SlideOut = (isEditModalActive, toggleEditModal) => {
export const HabitsSlideOut = () => {
  const editSlideout = useSelector((store) => store.editModal.editSlideout);

  const dispatch = useDispatch();

  const closeEditSlideOut = () => {
    // dispatch modal.actions.setSlideout
    dispatch(editModal.actions.setEditSlideout(false));
  };

  return (
    <>
      <div className={editSlideout ? 'modal active' : 'modal'}>
        <CloseToggleWrapper>
          <P>Close</P>
          <CloseToggle className='close-button' onClick={closeEditSlideOut}>
            +
          </CloseToggle>
        </CloseToggleWrapper>
        {editSlideout && <HabitEditForm />}
      </div>
    </>
  );
};
