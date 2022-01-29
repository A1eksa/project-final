import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Moment from 'moment';

import { IconContext } from 'react-icons';
import { AiTwotoneEdit } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { API_URL } from '../../utils/constants';
import todo from '../../reducers/todo';
import modal from '../../reducers/modal';
import editTodoModal from '../../reducers/editTodoModal';

import {
  H2,
  ListWrapper,
  CardWrapper,
  TodoSubject,
  TodoText,
  Category,
  Button,
  Label,
  // InputLabel,
  CategoryWrapper,
  // CustomCheckbox,
  // HiddenCheckbox,
  // CheckboxContainer,
  BottomContainer,
  LeftWrapper,
} from '../todo/_TodoStyles';

export const TodoList = () => {
  // const date = Moment()
  const todoItems = useSelector((store) => store.todo.items);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  // const showSlideOut = () => {
  //   dispatch(modal.actions.setSlideout(true));
  // };

  const showTodoSlideOut = () => {
    dispatch(editTodoModal.actions.setEditTodoSlideout(true));
  };

  // const onToggleTodo = () => {
  //   dispatch(todo.actions.toggleTodo(true));
  // };

  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    };

    fetch(API_URL(`todos/${userId}`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(todo.actions.setItems(data.response));
          dispatch(todo.actions.setErrors(null));
        } else {
          dispatch(todo.actions.setItems([]));
          //what does this do?
          dispatch(todo.actions.setErrors(data.response));
        }
      });
  }, [accessToken, dispatch, userId, todoItems]);

  const deleteTodo = (todoId) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({ user: userId }),
    };
    fetch(API_URL(`todos/${todoId}`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(todo.actions.setErrors(null));
        } else {
          dispatch(todo.actions.setItems([]));
          dispatch(todo.actions.setErrors(data.response));
        }
      });
  };

  const onToggleTodo = (todoId, isCompleted) => {
    console.log(todoId, isCompleted);
    const options = {
      method: 'PATCH',
      body: JSON.stringify({
        isCompleted: !isCompleted,
        _id: todoId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(API_URL(`todo/${todoId}/completed`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data.response);
          dispatch(todo.actions.toggleTodo(todoId));
          dispatch(todo.actions.setErrors(null));
        } else {
          console.log('error');
          dispatch(todo.actions.setErrors(data.response));
        }
      });
  };

  return (
    <>
      <ListWrapper>
        <H2>Your todos</H2>
        {todoItems &&
          todoItems.map((items) => (
            <CardWrapper key={items._id}>
              <CategoryWrapper>
                <Label>Category </Label>
                <Category>{items.category}</Category>
              </CategoryWrapper>
              <TodoSubject>{items.heading}</TodoSubject>
              <TodoText>{items.message}</TodoText>
              <BottomContainer>
                <LeftWrapper>
                  <IconContext.Provider
                    value={{
                      color: '#444444',
                      className: 'global-class-name',
                      size: '1.125rem',
                      style: { verticalAlign: 'middle', marginLeft: '0.05rem' },
                    }}
                  >
                    <Button onClick={() => deleteTodo(items._id)}>
                      <FaTimes />
                    </Button>
                    <Button onClick={() => showTodoSlideOut()}>
                      <AiTwotoneEdit />
                    </Button>
                  </IconContext.Provider>
                </LeftWrapper>
                <div>
                  <input
                    className='checkbox'
                    name={items._id}
                    id={items._id}
                    type='checkbox'
                    checked={items.isCompleted}
                    onChange={() => onToggleTodo(items._id, items.isCompleted)}
                  />
                </div>
                {/* <CheckboxContainer>
              <InputLabel>Mark as done
              <HiddenCheckbox
                  className='checkbox'
                  type='checkbox'>
              </HiddenCheckbox>
                <CustomCheckbox
                    type='checkbox'
                    checked={items.isCompleted}
                    onChange={() => onToggleTodo(items._id)}>
                </CustomCheckbox>
              </InputLabel>
            </CheckboxContainer> */}
              </BottomContainer>
            </CardWrapper>
          ))}
      </ListWrapper>
    </>
  );
};
