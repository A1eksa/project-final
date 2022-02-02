import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { API_URL } from '../../utils/constants';

import habit from '../../reducers/habit';
import editModal from '../../reducers/editModal';

import {
  FormWrapper,
  Label,
  Input,
  Button,
  H2,
  H3,
  Preamble,
} from '../signupin/_SignInStyles';

export const HabitEditForm = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const selectedHabit = useSelector((store) => store.editModal.selectedHabit);
  const selectedHeading = useSelector(
    (store) => store.editModal?.selectedHabit?.heading
  );
  const selectedDescription = useSelector(
    (store) => store.editModal?.selectedHabit?.description
  );
  console.log(selectedDescription, selectedHeading);
  const [heading, setHeading] = useState(selectedHeading);
  const [description, setDescription] = useState(selectedDescription);

  const dispatch = useDispatch();

  const updateHabit = (event, habitId) => {
    event.preventDefault();
    console.log(heading, description);
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({ _id: habitId, heading, description }),
    };

    fetch(API_URL(`habits/${habitId}/update`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            // dispatch(habit.actions.setItems())
            dispatch(habit.actions.updateHabit(data.response));
            dispatch(editModal.actions.setError(null));
          });
        } else {
          dispatch(editModal.actions.setErrors(data.response));
        }
      });
  };

  return (
    <>
      <H3>Edit your habit</H3>
      <Preamble>You are doing great! What do you wanna update?</Preamble>
      <FormWrapper onSubmit={(event) => updateHabit(event, selectedHabit._id)}>
        <Label htmlFor='heading'>
          Heading
          <Input
            type='text'
            defaultValue={selectedHeading}
            onChange={(e) => setHeading(e.target.value)}
          ></Input>
        </Label>
        <Label htmlFor='description'>
          Message
          <Input
            type='text'
            defaultValue={selectedDescription}
            onChange={(e) => setDescription(e.target.value)}
          ></Input>
        </Label>
        <Button type='submit'>Update you habit</Button>
      </FormWrapper>
    </>
  );
};
