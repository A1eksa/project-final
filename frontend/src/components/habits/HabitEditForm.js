import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { API_URL } from '../../utils/constants';

import user from '../../reducers/user';
import habit from '../../reducers/habit';

import {
  FormWrapper,
  Label,
  Input,
  Button,
  H2,
} from '../signupin/_SignInStyles';
import editModal from '../../reducers/editModal';

export const HabitEditForm = () => {
  const habitId = useSelector((store) => store.selectedHabit);
  console.log('is this the id?', habitId);
  const habitItems = useSelector((store) => store.habit.items);
  const updatedHabit = useSelector((store) => store.habit.updateHabit);

  const selectedHeading = useSelector(
    (store) => store.editModal.selectedHeading
  );
  const selectedDescription = useSelector(
    (store) => store.editModal.selectedDescription
  );
  // const selectedId = useSelector((store) => store.editModal.selectedId);

  const [heading, setHeading] = useState(selectedHeading);
  const [description, setDescription] = useState(selectedDescription);

  const dispatch = useDispatch();

  const submitUpdatedHabit = (event) => {
    console.log('habitId', habitId);
    event.preventDefault();
    const options = {
      method: 'PATCH',
      headers: {
        // Authorization: accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ heading, description, _id: habitId }),
    };

    fetch(API_URL(`habits/${habitId}/update`), options)
      .then((res) => res.json())
      .then((data) => {
        console.log('what is data?', data);
        batch(() => {
          // dispatch(editModal.actions.setSelectedId(selectedId));
          // dispatch(editModal.actions.setSelectedHeading(selectedHeading));
          // dispatch(
          //   editModal.actions.setSelectedDescription(selectedDescription)
          // );
          dispatch(habit.actions.setItems(data.response.habitItems));
          dispatch(habit.actions.updateHabit(updatedHabit));
          dispatch(habit.actions.setErrors(null));
          // dispatch(editModal.actions.setSelectedHabit());
        });
      });
  };

  /// ------ /// TEST
  //   const options = {
  //     method: 'PATCH',
  //     body: JSON.stringify({
  //       isCompleted: !isCompleted,
  //       _id: habitId,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   fetch(API_URL(`habits/${habitId}/completed`), options)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.success) {
  //         console.log(data.response);
  //         // dispatch(todo.actions.setItems(accessToken, userId));
  //         dispatch(habit.actions.toggleHabit(habitId));
  //         dispatch(habit.actions.setErrors(null));
  //       } else {
  //         console.log('error');
  //         dispatch(habit.actions.setErrors(data.response));
  //       }
  //     });
  // };
  /// ------ /// TEST

  return (
    <>
      <h2>Edit your habit</h2>
      <FormWrapper onSubmit={() => submitUpdatedHabit()}>
        <Label htmlFor='heading'>
          Heading
          <Input
            type='text'
            defaultValue={selectedHeading}
            onChange={(e) =>
              setHeading({ ...heading, heading: e.target.value })
            }
          ></Input>
        </Label>
        <Label htmlFor='description'>
          Message
          <Input
            type='text'
            defaultValue={selectedDescription}
            onChange={(e) =>
              setDescription({ ...description, description: e.target.value })
            }
          ></Input>
        </Label>
        {/* <Label htmlFor='heading'>
          Heading
          <Input
            type='text'
            value={selectedHeading}
            onChange={(e) => setHabitInfo(e.target.value)}
          ></Input>
        </Label>
        <Label htmlFor='description'>
          Message
          <Input
            type='text'
            value={selectedDescription}
            onChange={(e) => setHabitInfo(e.target.value)}
          ></Input>
        </Label> */}
        <Button type='submit'>Update</Button>
      </FormWrapper>
    </>
  );
};
