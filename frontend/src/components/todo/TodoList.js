import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { API_URL } from '../../utils/constants';
import todo from '../../reducers/todo';

export const TodoList = () => {
  const todoItems = useSelector((store) => store.todo.items);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

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

  return (
    <>
      <h3>These are your todos</h3>
      {todoItems.map((items) => (
        <div key={items._id}>
          <h4>{items.heading}</h4>
          <p>{items.message}</p>
          <p>{items.category}</p>
        </div>
      ))}
    </>
  );
};
