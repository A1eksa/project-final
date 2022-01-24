import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../utils/constants';
import user from '../../reducers/user';
import { TodoList } from '../todo/TodoList';
import { HabitList } from '../habits/HabitList';
import SlideOut from '../modal/SlideOut';
// import Quote from '../quotes/Quote';

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

  useEffect(() => {
    if (!accessToken) {
      navigate('/signin');
    }
  }, [accessToken, navigate]);

  return (
    <>
      <SlideOut />
      <h1>Hello</h1>
      <button onClick={handleLogout}>SIGN OUT</button>
      {/* <Quote /> */}
      <TodoList />
      <HabitList />
    </>
  );
};

export default Dashboard;
