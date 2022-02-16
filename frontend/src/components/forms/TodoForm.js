import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { API_URL } from '../../utils/constants';

import user from '../../reducers/user';
// import modal from '../../reducers/modal';

import {
  FormCategoryWrapper,
  HiddenRadioButton,
  RadioButton,
  CategoryLabel,
  FormWrapper,
  Label,
  Input,
  Button,
} from './FormsStyles';

export const TodoForm = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  const [heading, setHeading] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({
        heading,
        message,
        category,
        user: userId,
        dueDate,
      }),
    };
    fetch(API_URL('todos'), options)
      .then((res) => res.json())
      .then((data) => {
        console.log('todo form ', data);
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUserId(data.response.userId));
            // dispatch(modal.actions.setSlideout(false));
            window.location.reload();
          });
        }
      });
  };

  return (
    <>
      <FormWrapper onSubmit={onFormSubmit}>
        <Label htmlFor='heading'>
          Heading
          <Input
            type='text'
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          ></Input>
        </Label>
        <Label htmlFor='message'>
          Message
          <Input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></Input>
        </Label>

        <Label htmlFor='categories'> Choose category </Label>

        <FormCategoryWrapper>
          <CategoryLabel htmlFor='Home'>
            Home
            <HiddenRadioButton
              name='options'
              id_='1'
              value='Home'
              onChange={(e) => setCategory(e.target.value)}
            ></HiddenRadioButton>
            <RadioButton></RadioButton>
          </CategoryLabel>
          <CategoryLabel htmlFor='Family'>
            Family
            <HiddenRadioButton
              name='options'
              id_='2'
              value='Family'
              onChange={(e) => setCategory(e.target.value)}
            ></HiddenRadioButton>
            <RadioButton></RadioButton>
          </CategoryLabel>
          <CategoryLabel htmlFor='Work'>
            Work
            <HiddenRadioButton
              name='options'
              id_='3'
              value='Work'
              onChange={(e) => setCategory(e.target.value)}
            ></HiddenRadioButton>
            <RadioButton></RadioButton>
          </CategoryLabel>
          <CategoryLabel htmlFor='Friends'>
            Friends
            <HiddenRadioButton
              type='radio'
              name='options'
              id_='4'
              value='Friends'
              onChange={(e) => setCategory(e.target.value)}
            ></HiddenRadioButton>
            <RadioButton></RadioButton>
          </CategoryLabel>
          <Label htmlFor='date'>
            Due date
            <Input
              type='date'
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            ></Input>
          </Label>
        </FormCategoryWrapper>
        <Button type='submit'>Save</Button>
      </FormWrapper>
    </>
  );
};
