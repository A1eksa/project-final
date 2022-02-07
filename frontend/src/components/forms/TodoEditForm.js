import React, { useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { API_URL } from '../../utils/constants';

import todo from '../../reducers/todo';
import editModal from '../../reducers/editModal';

import {
  FormWrapper,
  Label,
  Input,
  Button,
  H3,
  Preamble,
  CategoryLabel,
  HiddenRadioButton,
  RadioButton,
  FormCategoryWrapper,
} from './FormsStyles';

export const TodoEditForm = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const selectedTodo = useSelector((store) => store.editModal.selectedTodo);

  const selectedTodoHeading = useSelector(
    (store) => store.editModal?.selectedTodo?.heading
  );
  const selectedMessage = useSelector(
    (store) => store.editModal?.selectedTodo?.message
  );
  const selectedCategory = useSelector(
    (store) => store.editModal?.selectedTodo?.category
  );
  const selectedDueDate = useSelector(
    (store) => store.editModal?.selectedTodo?.dueDate
  );

  const [heading, setHeading] = useState(selectedTodoHeading);
  const [message, setMessage] = useState(selectedMessage);
  const [category, setCategory] = useState(selectedCategory);
  const [dueDate, setDueDate] = useState(selectedDueDate);

  const dispatch = useDispatch();

  const updateTodo = (event, todoId) => {
    event.preventDefault();
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({
        _id: todoId,
        heading,
        message,
        category,
        dueDate,
      }),
    };
    fetch(API_URL(`todos/${todoId}/update`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            // dispatch(habit.actions.setItems())
            dispatch(todo.actions.updateTodo(data.response));
            dispatch(editModal.actions.setError(null));
          });
        } else {
          dispatch(editModal.actions.setErrors(data.response));
        }
      });
  };

  return (
    <>
      <H3>Edit your todo</H3>
      <Preamble>You are doing great! What do you wanna update?</Preamble>
      <FormWrapper onSubmit={(event) => updateTodo(event, selectedTodo._id)}>
        <Label htmlFor='heading'>
          Heading
          <Input
            type='text'
            defaultValue={selectedTodoHeading}
            onChange={(e) => setHeading(e.target.value)}
          ></Input>
        </Label>
        <Label htmlFor='message'>
          Message
          <Input
            type='text'
            defaultValue={selectedMessage}
            onChange={(e) => setMessage(e.target.value)}
          ></Input>
        </Label>
        <Label htmlFor='category'>
          Category
          {/* <Input
            type='text'
            defaultValue={selectedCategory}
            onChange={(e) => setCategory(e.target.value)}
          ></Input> */}
          <FormCategoryWrapper>
            <CategoryLabel htmlFor='Home'>
              Home
              <HiddenRadioButton
                type='radio'
                name='options'
                id_='1'
                value={selectedCategory}
                onChange={(e) => setCategory(e.target.value)}
              ></HiddenRadioButton>
              <RadioButton></RadioButton>
            </CategoryLabel>
            <CategoryLabel htmlFor='Family'>
              Family
              <HiddenRadioButton
                type='radio'
                name='options'
                id_='2'
                value={selectedCategory}
                onChange={(e) => setCategory(e.target.value)}
              ></HiddenRadioButton>
              <RadioButton></RadioButton>
            </CategoryLabel>
            <CategoryLabel htmlFor='Work'>
              Work
              <HiddenRadioButton
                type='radio'
                name='options'
                id_='3'
                value={selectedCategory}
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
                value={selectedCategory}
                onChange={(e) => setCategory(e.target.value)}
              ></HiddenRadioButton>
              <RadioButton></RadioButton>
            </CategoryLabel>
          </FormCategoryWrapper>
        </Label>
        <Label htmlFor='category'>
          Due date
          <Input
            type='date'
            defaultValue={selectedDueDate}
            onChange={(e) => setDueDate(e.target.value)}
          ></Input>
        </Label>
        <Button type='submit'>Update Todo</Button>
      </FormWrapper>
    </>
  );
};
