import React, { useState } from 'react';
import { API_URL } from '../../utils/constants';

const TodoForm = () => {
  const [todo, setTodo] = useState('');
  const [heading, setHeading] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ heading, message, category }),
    };
    fetch(API_URL('todos'), options)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor='heading'>
        heading
        <input
          type='text'
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        ></input>
      </label>
      <label htmlFor='message'>
        message
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
      </label>
      <label htmlFor='category'>
        category
        <input
          type='text'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></input>
      </label>
      <button type='submit'>Press</button>
    </form>
  );
};

export default TodoForm;
