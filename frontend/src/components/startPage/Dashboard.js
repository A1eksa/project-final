import React, { useEffect, useState } from 'react';
import { useSelector, batch, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../utils/constants';
import user from '../../reducers/user';
// import todo from '../../reducers/todo';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accessToken = useSelector((store) => store.user.accessToken);
  // if there is no accessToken then redirect to login
  useEffect(() => {
    if (!accessToken) {
      navigate('/signin');
    }
  }, [accessToken, navigate]);

  const handleLogout = () => {
    dispatch(user.actions.logout());
    localStorage.removeItem('user');
  };

  // const todo = useSelector((store) => store.todo.items);
  // const accessToken = useSelector((store) => store.user.accessToken);

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate('/signin');
  //   }
  // }, [accessToken, navigate]);

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       Authorization: accessToken,
  //     },
  //   };

  //   fetch(API_URL('todos', options).then((res) => res.json())).then(
  //     (data) => {
  //       if (data.success) {
  //         dispatch(todo.actions.setItems(data.response));
  //         dispatch(todo.actions.setError(null));
  //       } else {
  //         dispatch(todo.actions.setItems([]));
  //         dispatch(todo.actions.setError(data.response));
  //       }
  //     },
  //     [accessToken, dispatch]
  //   );
  // });

  return (
    <>
      <h1>Hello</h1>
      <button onClick={handleLogout}>SIGN OUT</button>
    </>
  );
};

export default Dashboard;
