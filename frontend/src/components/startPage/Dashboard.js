import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../utils/constants';
import user from '../../reducers/user';
import { TodoList } from '../todo/TodoList';
import { HabitList } from '../habits/HabitList';
import SlideOut from '../modal/SlideOut';
import { Weather } from '../date-time-weather/Weather';
import modal from '../../reducers/modal';
// import Quote from '../quotes/Quote';
import '../modal/SlideOut.css';

const Dashboard = () => {
  // const slideout = useSelector((store) => store.modal.slideout);

  const showSlideOut = () => {
    dispatch(modal.actions.setSlideout(true));
  };

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

  useEffect(() => {
    if (!accessToken) {
      navigate('/signin');
    }
  }, [accessToken, navigate]);

  return (
    <>
      <h1>Hello</h1>
      <button onClick={handleLogout}>SIGN OUT</button>
      <button onClick={showSlideOut}>OPEN MODAL</button>
      {/* <button
        onClick={() => {
          navigate('edit');
          toggleEditModal();
        }}
      >
        OPEN MODAL
      </button> */}
      {/* <Quote /> */}
      <TodoList />
      <HabitList />
      <Weather />
    </>
  );
};

export default Dashboard;
