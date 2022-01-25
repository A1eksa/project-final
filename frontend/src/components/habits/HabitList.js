import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { API_URL } from '../../utils/constants';
import habit from '../../reducers/habit';
import user from '../../reducers/user';

export const HabitList = () => {
  const habitItems = useSelector((store) => store.habit.items);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    };

    fetch(API_URL(`habits/${userId}`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(habit.actions.setItems(data.response));
          dispatch(habit.actions.setErrors(null));
        } else {
          dispatch(habit.actions.setItems([]));
          dispatch(habit.actions.setErrors(data.response));
        }
      });
  }, [accessToken, userId, habitItems, dispatch]);

  const deleteHabit = (habitId) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({ user: userId }),
    };
    fetch(API_URL(`habits/${habitId}`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(habit.actions.setErrors(null));
        } else {
          dispatch(habit.actions.setItems([]));
          dispatch(habit.actions.setErrors(data.response));
        }
      });
  };

  return (
    <>
      <h3>these are your habits</h3>
      {habitItems.map((items) => (
        <div key={items._id}>
          <h4>{items.heading}</h4>
          <p>{items.description}</p>
          <button onClick={() => deleteHabit(items._id)}>Delete</button>
          {/* <button onClick={() => deleteHabit()}>Edit</button> */}
        </div>
      ))}
    </>
  );
};
