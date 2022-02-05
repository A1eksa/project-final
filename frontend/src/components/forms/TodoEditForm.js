import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';

import { API_URL } from '../../utils/constants';
import user from '../../reducers/user';
import todo from '../../reducers/todo';

import { FormWrapper, Label, Input, Button } from './FormsStyles';

export const TodoEditForm = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  const [heading, setHeading] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    //     const options = {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: accessToken,
    //       },
    //       body: JSON.stringify({ heading, message, category, user: userId }),
    //     };
    //     fetch(API_URL('todos'), options)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (data.success) {
    //           console.log('add todo', data);
    //           batch(() => {
    //             dispatch(user.actions.setUserId(data.response.userId));
    //           });
    //         }
    //       });
    //   };

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
  };

  return (
    <>
      <h2>Edit your todo</h2>
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
        <Label htmlFor='category'>
          Category
          <Input
            type='text'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></Input>
        </Label>
        <Button type='submit'>Update Todo</Button>
      </FormWrapper>
    </>
  );
};
