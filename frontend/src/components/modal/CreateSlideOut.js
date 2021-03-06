import React, { useState } from 'react';
import { HabitForm } from '../forms/HabitForm';
import { TodoForm } from '../forms/TodoForm';
import { useSelector, useDispatch } from 'react-redux';
import './SlideOut.css';

import modal from '../../reducers/modal';

import { P, CloseToggle, CloseToggleWrapper } from './_ModalStyles';

export const CreateSlideOut = () => {
  const slideout = useSelector((store) => store.modal.slideout);
  const [form, setForm] = useState('todo');

  const dispatch = useDispatch();

  const closeSlideOut = () => {
    dispatch(modal.actions.setSlideout(false));
  };

  return (
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
  );
};
