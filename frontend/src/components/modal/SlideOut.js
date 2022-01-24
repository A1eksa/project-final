import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HabitForm } from '../habits/HabitForm';
import { TodoForm } from '../todo/TodoForm';
import { TodoList } from '../todo/TodoList';

import './SlideOut.css';

const SlideOut = () => {
  const [slideout, setSlideout] = useState(false);
  const [form, setForm] = useState('todo');

  const showSlideOut = () => setSlideout(!slideout);

  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          Add todo/habit
          <button className='add-button' onClick={showSlideOut}>
            +
          </button>
        </Link>
      </div>
      <nav className={slideout ? 'nav-menu active' : 'nav-menu'}>
        <div className='close-toggle'>
          <Link to='#' className='menu-bars'>
            Close
            <button className='close-button' onClick={showSlideOut}>
              +
            </button>
          </Link>
        </div>
        {/* <ul className='nav-menu-items' onClick={showSlideOut}>
          <li className='navbar-toggle'>
          </li>
        </ul> */}
        <div className='add-buttons'>
          <button className='choose-form-btn' onClick={() => setForm('todo')}>
            Create todo
          </button>
          <button className='choose-form-btn' onClick={() => setForm('habit')}>
            Create habit
          </button>
        </div>
        {form === 'todo' && <TodoForm />}
        {form === 'habit' && <HabitForm />}
      </nav>
    </>
  );
};

export default SlideOut;
