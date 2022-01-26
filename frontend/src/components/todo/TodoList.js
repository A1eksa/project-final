import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { API_URL } from '../../utils/constants';
import todo from '../../reducers/todo';
// import './SlideOut.css';

export const TodoList = () => {
  const todoItems = useSelector((store) => store.todo.items);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);
  // const editTodo = useSelector((store) => store.todo.)

  //THIS IS THE SLIDEOUT FUNCTION FOR SHOW SLIDEOUT //
  const [slideout, setSlideout] = useState(false);
  const [editTodo, setEditTodo] = useState(false); ///maybe should be false
  // const [form, setForm] = useState('edit-todo');

  // const showSlideOut = () => setSlideout(!slideout);

  const showSlideOut = (id) => {
    ///fetch with todo id and right url with todo Id endpoint (create).
    setSlideout(!slideout);
    setEditTodo(!editTodo);
  };

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

  // const updateTodo = (userId) => {};

  return (
    <>
      <h3>These are your todos</h3>
      {todoItems.map((items) => (
        <div key={items._id}>
          <h4>{items.heading}</h4>
          <p>{items.message}</p>
          <p>{items.category}</p>
          <button onClick={() => deleteTodo(items._id)}>Delete</button>
          <nav className={slideout ? 'nav-menu active' : 'nav-menu'}></nav>
          <button onClick={() => showSlideOut(item._id)}>Edit button</button>
          {/* <button onClick={() => updateTodo(items._id)}>Update todo</button> */}

          {/* {form === 'edit-todo' && <EditTodoForm />} */}
        </div>
      ))}
    </>
  );
};

{
  /* <Link to='#' className='menu-bars'>
    Edit
    <button onClick={() => showSlideOut()}>disapear button</button>
  </Link> */
}
{
  /* {form === 'todo' && <TodoForm />} */
}
