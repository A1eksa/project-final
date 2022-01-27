import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HabitForm } from '../habits/HabitForm';
import { TodoForm } from '../todo/TodoForm';
import { TodoList } from '../todo/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import modal from '../../reducers/modal';
import './SlideOut.css';

// const SlideOut = (isEditModalActive, toggleEditModal) => {
const SlideOut = () => {
  const slideout = useSelector((store) => store.modal.slideout);
  const [form, setForm] = useState('todo');

  const dispatch = useDispatch();

  const showSlideOut = () => {
    // dispatch modal.actions.setSlideout
    dispatch(modal.actions.setSlideout(true));
  };
  const closeSlideOut = () => {
    // dispatch modal.actions.setSlideout
    dispatch(modal.actions.setSlideout(false));
  };

  return (
    <>
      <div className='open-toggle'>
        Add todo/habit
        <button className='add-button' onClick={showSlideOut}>
          +
        </button>
      </div>
      <div className={slideout ? 'modal active' : 'modal'}>
        <div className='close-toggle'>
          Close
          <button className='close-button' onClick={closeSlideOut}>
            +
          </button>
        </div>
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

export default SlideOut;
