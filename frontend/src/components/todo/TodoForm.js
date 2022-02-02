import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';

import { API_URL } from '../../utils/constants';
import user from '../../reducers/user';
import todo from '../../reducers/todo';

import { FormWrapper, Label, Input, Button } from '../signupin/_SignInStyles';

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
  const [category, setCategory] = useState('');

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
      {/* <select>
        <option value='work'>work</option>
        <option>2</option>
      </select> */}
      <FormWrapper onSubmit={onFormSubmit}>
        <Label htmlFor='category'>
          Category
          <select>
            <option value='work'>work</option>
            <option>2</option>
          </select>
        </Label>
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
        <Label htmlFor='category'>
          Category
          <Input
            type='text'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></Input>
          {/* Created */}
          {/* <Input
            type='date'
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          ></Input>
          Due date
          <Input
            type='date'
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          ></Input> */}
        </Label>
        <Button type='submit'>Save</Button>
        {/* <button type='submit'>UPDATE TODO</button> */}
        {/* <button type='submit' onClick={updateTodo}>
        UPDATE TODO
      </button> */}
      </FormWrapper>
    </>
  );
};
