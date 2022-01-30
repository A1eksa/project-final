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
  const accessToken = useSelector((store) => store.user.accessToken);
  // const selectedHabit = useSelector((store) => store.editModal.selectedHabit);

  const selectedHeading = useSelector((store) => store.editModal.selectedHeading);
  const selectedDescription = useSelector((store) => store.editModal.selectedDescription);
  
  const [heading, setHeading] = useState(selectedHeading);
  const [description, setDescription] = useState(selectedDescription);

  // const [selectedHabit, setSelectedHabit] = useState({
  //   heading: 'heading',
  //   description: 'description',
  // });



  // const setSelectedId = useSelector((store) => store.editModal.setSelectedId);
  // const habitItems = useSelector((store) => store.habit.items);

  // const [habitInfo, setHabitInfo] = useState({
  //   description: selectedDescription,
  //   heading: selectedHeading,
  // });

  const dispatch = useDispatch();

  // const onHabitSubmit = (event) => {
  //   event.preventDefault();

  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: accessToken,
  //     },
  //     // body: JSON.stringify({ heading, description }),
  //   };
  //   fetch(API_URL('habits'), options)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.success) {
  //         batch(() => {
  //           //dispatch(habit.actions.setItems(data.response.items));
  //           dispatch(user.actions.setUserId(data.response.userId));
  //         });
  //       }
  //     });
  // };

  // const updateHabit = (habitId, description, heading) => {
  //   console.log(
  //     'habit Id:',
  //     habitId,
  //     'description:',
  //     description,
  //     'heading:',
  //     heading
  //   );
  //   const options = {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // Authorization: accessToken,
  //     },
  //     body: JSON.stringify({ description, heading, _id: habitId }),
  //   };

  //   fetch(API_URL(`habits/${habitId}/update`), options)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.success) {
  //         console.log(data.response);
  //         dispatch(habit.actions.updateHabit(habitId));
  //         dispatch(habit.actions.setErrors(null));
  //       } else {
  //         dispatch(habit.actions.setErrors(data.response));
  //       }
  //     });
  // };

  const updateHabit = (habitId, description, heading) => {
    console.log(
      'habit Id:',
      habitId,
      'description:',
      description,
      'heading:',
      heading
    );
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: accessToken,
      },
      body: JSON.stringify({ ...heading, ...description}),
    };

    fetch(API_URL(`habits/${habitId}/update`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data.response);
          batch(() => {
          dispatch(habit.actions.updateHabit(habitId));
          dispatch(editModal.actions.setError(null));
          })
        } else {
          dispatch(editModal.actions.setErrors(data.response));
        }
      });
  };

  return (
    <>
      {/* onChange={(e) =>
                setUserInfo({ ...userInfo, bio: e.target.value }) */}
      <h2>Edit your habit</h2>
      <FormWrapper onSubmit={updateHabit}>
       <Label htmlFor='heading'>
          Heading
          <Input
            type='text'
            defaultValue={selectedHeading}
            onChange={(e) =>
              setHeading({ ...heading, heading: e.target.value })}
          ></Input>
        </Label>
        <Label htmlFor='description'>
          Message
          <Input
            type='text'
            defaultValue={selectedDescription}
            onChange={(e) =>
              setDescription({ ...description, description: e.target.value })}
          ></Input>
        </Label>
        {/* <Label htmlFor='heading'>
          Heading
          <Input
            type='text'
            value={habitInfo.heading}
            onChange={(e) => setHabitInfo(e.target.value)}
          ></Input>
        </Label>
        <Label htmlFor='description'>
          Message
          <Input
            type='text'
            value={habitInfo.description}
            onChange={(e) => setHabitInfo(e.target.value)}
          ></Input>
        </Label> */}
        <Button type='submit'>Update</Button>
      </FormWrapper>
    </>
  );
};
