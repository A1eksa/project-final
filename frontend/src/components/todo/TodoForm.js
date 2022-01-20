import React, { useState } from 'react';
import { API_URL } from '../../utils/constants';
import user from '../../reducers/user';
import todo from '../../reducers/todo';
import { useSelector, useDispatch, batch } from 'react-redux';

export const TodoForm = () => {
  const [heading, setHeading] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('');

  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({ heading, message, category, user: userId }),
    };
    fetch(API_URL('todos'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(todo.actions.setItems(data.response.items));
            dispatch(user.actions.setUserId(data.response.userId));
          });
        }
      });
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
