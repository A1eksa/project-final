import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { API_URL } from '../../utils/constants';

import user from '../../reducers/user';

import { FormWrapper, Label, Input, Button } from '../signupin/_SignInStyles';

export const HabitForm = () => {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [regularity, setRegularity] = useState({
    onceAday: 'Once a day',
    everyOtherDay: 'Every other day',
    onceAweek: 'Once a week',
  });

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
      body: JSON.stringify({ heading, description, regularity }),
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
      <Label>Regularity</Label>
      <Label htmlFor='heading'>
        Once a day
        <input
          type='radio'
          name='options'
          id_='1'
          value='once a day'
          onChange={(e) => setRegularity(e.target.value)}
        ></input>
      </Label>
      <Label htmlFor='heading'>
        Every other day
        <input
          type='radio'
          name='options'
          id_='2'
          value='every other day'
          onChange={(e) => setRegularity(e.target.value)}
        ></input>
      </Label>
      <Label htmlFor='heading'>
        Once a week
        <input
          type='radio'
          name='options'
          id_='3'
          value='once a week'
          onChange={(e) => setRegularity(e.target.value)}
        ></input>
      </Label>

      {/* <Label htmlFor='progress'>
        How many days
        <Input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Input>
      </Label> */}
      <Button type='submit'>Save</Button>
    </FormWrapper>
  );
};
