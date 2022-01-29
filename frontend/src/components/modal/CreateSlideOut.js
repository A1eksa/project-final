import React, { useState } from 'react';
import { HabitForm } from '../habits/HabitForm';
import { TodoForm } from '../todo/TodoForm';
import { useSelector, useDispatch } from 'react-redux';
import modal from '../../reducers/modal';
import './SlideOut.css';

import {
  P,
  OpenToggle,
  CloseToggle,
  // SlideOutWrapper,
  // OpenToggleWrapper,
  CloseToggleWrapper,
} from './_ModalStyles';

// const SlideOut = (isEditModalActive, toggleEditModal) => {
export const CreateSlideOut = () => {
  const slideout = useSelector((store) => store.modal.slideout);
  const [form, setForm] = useState('todo');

  const dispatch = useDispatch();


  const closeSlideOut = () => {
    // dispatch modal.actions.setSlideout
    dispatch(modal.actions.setSlideout(false));
  };

  return (
    <>
      {/* <OpenToggleWrapper>
        <P>Add todo/habit</P>
        <OpenToggle onClick={showSlideOut}>
          +
        </OpenToggle>
      </OpenToggleWrapper> */}
      <div className={slideout ? 'modal active' : 'modal'}>
        <CloseToggleWrapper>
          <P>Close</P>
          <CloseToggle className='close-button' onClick={closeSlideOut}>
            +
          </CloseToggle>
        </CloseToggleWrapper>

        <div className='form-toggle'>
          <button className='choose-form-btn' onClick={() => setForm('todo')}>
            Create todo
          </button>
          <button className='choose-form-btn' onClick={() => setForm('habit')}>
            Create habit
          </button>
        </div>
        {form === 'todo' && <TodoForm />}
        {form === 'habit' && <HabitForm />}
      </div>
    </>
  );
};
