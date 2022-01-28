import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'moment';

import { API_URL } from '../../utils/constants';
import todo from '../../reducers/todo';
import modal from '../../reducers/modal';
import { CardWrapper, ListWrapper } from './_TodoListStyles';

export const TodoList = () => {
  const date = Moment();
  const todoItems = useSelector((store) => store.todo.items);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);
  // const isComplete = useSelector((store) => store.todo.toggleTodo);

  const showSlideOut = () => {
    dispatch(modal.actions.setSlideout(true));
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
        // user: userId,
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
          // dispatch(todo.actions.setItems(accessToken, userId));
          dispatch(todo.actions.toggleTodo(todoId));
          dispatch(todo.actions.setErrors(null));
        } else {
          console.log('error');
          dispatch(todo.actions.setErrors(data.response));
        }
      });
  };

  return (
    <ListWrapper>
      <h3>These are your todos</h3>
      {todoItems &&
        todoItems.map((items) => (
          <CardWrapper key={items._id}>
            <h4>{items.heading}</h4>
            <p>{items.message}</p>
            <p>{items.category}</p>
            {/* <span className='created-at'>
              {Moment(items.createdAt).format('hh:mm:ss')}
            </span>
            <span className='created-at-day'>
              {Moment(date).format('dddd')}
            </span> */}
            <input
              className='checkbox'
              name={items._id}
              id={items._id}
              type='checkbox'
              checked={items.isCompleted}
              onChange={() => onToggleTodo(items._id, items.isCompleted)}
            />

            <button onClick={() => deleteTodo(items._id)}>Delete</button>
            <button onClick={() => showSlideOut()}>Edit button</button>
          </CardWrapper>
        ))}
    </ListWrapper>
  );
};
