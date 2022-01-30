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

export const HabitEditForm = () => {
  // const [heading, setHeading] = useState('');
  // const [description, setDescription] = useState('');

  const accessToken = useSelector((store) => store.user.accessToken);
  // const selectedHabit = useSelector((store) => store.editModal.selectedHabit);

  const selectedHeading = useSelector((store) => store.editModal.heading);
  const selectedDescription = useSelector(
    (store) => store.editModal.description
  );

  // const setSelectedId = useSelector((store) => store.editModal.setSelectedId);
  // const habitItems = useSelector((store) => store.habit.items);

  const [habitInfo, setHabitInfo] = useState({
    description: selectedDescription,
    heading: selectedHeading,
  });

  const dispatch = useDispatch();

  const onHabitSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      // body: JSON.stringify({ heading, description }),
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
    <>
      {/* onChange={(e) =>
                setUserInfo({ ...userInfo, bio: e.target.value }) */}
      <h2>Edit your habit</h2>
      <FormWrapper onSubmit={onHabitSubmit}>
        <Label htmlFor='heading'>
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
        </Label>
        <Button type='submit'>Update</Button>
      </FormWrapper>
    </>
  );
};
