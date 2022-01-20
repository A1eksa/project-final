import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { API_URL } from '../../utils/constants';

import habit from '../../reducers/habit';

export const HabitForm = () => {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');

  const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();

  const onHabitSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({ heading, description }),
    };
    fetch(API_URL('habits'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(habit.actions.setItems(data.response.items));
            // dispatch(habit.actions.setUserId(data.response.userId));
          });
        }
      });
  };
  return (
    <form onSubmit={onHabitSubmit}>
      <label htmlFor='heading'>
        heading
        <input
          type='text'
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        ></input>
      </label>
      <label htmlFor='description'>
        message
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </label>
      <button type='submit'>Press</button>
    </form>
  );
};
