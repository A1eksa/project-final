import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { API_URL } from '../../utils/constants';

import user from '../../reducers/user';

import { FormWrapper, Label, Input, Button } from '../signupin/_SignInStyles';

export const HabitForm = () => {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');

  const accessToken = useSelector((store) => store.user.accessToken);
  // const insideStore = useSelector((store) => store.habit);
  // console.log('inside store', insideStore);

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
            //dispatch(habit.actions.setItems(data.response.items));
            dispatch(user.actions.setUserId(data.response.userId));
          });
        }
      });
  };
  return (
    <FormWrapper onSubmit={onHabitSubmit}>
      <Label htmlFor='heading'>
        Heading
        <Input
          type='text'
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        ></Input>
      </Label>
      <Label htmlFor='description'>
        Message
        <Input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Input>
      </Label>
      <Button type='submit'>Save</Button>
    </FormWrapper>
  );
};
