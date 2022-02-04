import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';

import { API_URL } from '../../utils/constants';
import user from '../../reducers/user';
import todo from '../../reducers/todo';

import { FormWrapper, Label, Input, Button } from '../signupin/_SignInStyles';
import {
  FormCategoryWrapper,
  HiddenRadioButton,
  RadioButton,
  CategoryLabel,
  Inputlabel,
} from './_TodoStyles';

export const TodoForm = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);
  // const editTodo = useSelector((store) => store.items._id);
  // const selectedTodo = useSelector((store) => store.editTodo.item);

  // const [heading, setHeading] = useState(selectedTodo ? items.heading : '');
  // const [message, setMessage] = useState(selectedTodo ? items._id.message : '');
  // const [category, setCategory] = useState(
  //   selectedTodo ? editTodo.category : ''
  // );

  const [heading, setHeading] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState({
    home: 'Home',
    family: 'Family',
    work: 'Work',
    friends: 'Friends',
  });

  // From the recording:
  // const [category, setCategory] = useState(currentlySelectedTodo ? currentlySelectedTodo.category : '');

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({ heading, message, category, user: userId }),
    };
    fetch(API_URL('todos'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log('add todo', data);
          batch(() => {
            dispatch(user.actions.setUserId(data.response.userId));
          });
        }
      });
  };

  // const updateTodo = (event, todoId) => {
  //   event.preventDefault();
  //   const options = {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: accessToken,
  //     },
  //     body: JSON.stringify({ heading, message, category, user: userId }),
  //   };
  //   fetch(API_URL(`todos/${todoId}`), options)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };

  // {
  //   if (data.success) {
  //     console.log('edit todo', data);
  //     batch(() => {
  //       dispatch(todo.actions.setItems(data.response.items));
  //       dispatch(todo.actions.setEdit(data.response.todo));
  //     });
  //   } else {
  //     dispatch(todo.actions.setErrors(data.response));
  //   }
  // }

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
        </FormCategoryWrapper>

        <Button type='submit'>Save</Button>
      </FormWrapper>
    </>
  );
};
