import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { API_URL } from '../../utils/constants';

// import user from '../../reducers/user';
import habit from '../../reducers/habit';

import {
  FormWrapper,
  Label,
  Input,
  Button,
  H2,
  Preamble,
} from '../signupin/_SignInStyles';
import editModal from '../../reducers/editModal';

export const HabitEditForm = () => {
  const selectedHeading = useSelector(
    (store) => store.editModal.selectedHeading
  );

  const selectedDescription = useSelector(
    (store) => store.editModal.selectedDescription
  );
  const selectedHabit = useSelector((store) => store.editModal.selectedHabit);
  const heading = useSelector((store) => store.habit.heading);
  const description = useSelector((store) => store.habit.description);

  // const [heading, setHeading] = useState({ heading: selectedHeading });
  // const [description, setDescription] = useState({
  //   description: selectedDescription,
  // });

  const [habit, setHabit] = useState({
    description: description,
    heading: heading,
  });

  const dispatch = useDispatch();

  const updateHabit = (event, habitId) => {
    event.eventPreventDefault();
    console.log(
      'console id:',
      habitId,
      'console description:',
      description,
      'console heading:',
      heading
    );
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: habitId, ...heading, ...description }),
    };

    fetch(API_URL(`habits/${habitId}/update`), options)
      .then((res) => res.json())
      .then((data) => {
        console.log('vad är data?', data);
        if (data.success) {
          console.log(data.response);
          setHabit(data.response);
          batch(() => {
            dispatch(habit.actions.setItems());
            dispatch(habit.actions.updateHabit(habitId));
            dispatch(editModal.actions.setError(null));
            dispatch(habit.actions.setHeading(data.response.heading));
            dispatch(habit.actions.setDescription(data.response.description));
          });
        } else {
          dispatch(editModal.actions.setErrors(data.response));
        }
      });
  };

  return (
    <>
      <H2>Edit your habit</H2>
      <Preamble>Here is some text!</Preamble>
      <FormWrapper onSubmit={() => updateHabit(selectedHabit._id)}>
        <Label htmlFor='heading'>
          Heading
          <Input
            type='text'
            defaultValue={selectedHeading}
            onChange={(e) => setHabit({ ...habit, heading: e.target.value })}
          ></Input>
        </Label>
        <Label htmlFor='description'>
          Message
          <Input
            type='text'
            defaultValue={selectedDescription}
            onChange={(e) =>
              setHabit({ ...habit, description: e.target.value })
            }
          ></Input>
        </Label>
        <Button type='submit'>Update</Button>
      </FormWrapper>
    </>
  );
};
