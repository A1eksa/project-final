import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import user from '../../reducers/user';
import { TodoList } from '../todo/TodoList';
import { HabitList } from '../habits/HabitList';
import { CreateSlideOut } from '../modal/CreateSlideOut';
import { HabitsSlideOut } from '../modal/HabitsSlideOut';
import { TodoSlideOut } from '../modal/TodoSlideOut';
// import { TimeTicker } from '../small components/TimeTicker';
import { TheHeader } from '../header/TheHeader';
import { Footer } from '../footer/Footer';
import { Quote } from '../quotes/Quote';
import { WeatherTest } from '../dateTimeWeather/WeatherTest';
import '../modal/SlideOut.css';
import Thoughts from '../small components/Thoughts';

import {
  DashboardWrapper,
  MainContentWrapper,
  // User,
  // LogOutButton,
  // H1,
  H2,
  Line,
  HeroText,
  UpperWrapper,
} from './_DashboardStyles';

const Dashboard = () => {
  // const loggedInUser = useSelector((store) => store.user.username);

  const navigate = useNavigate();

  const accessToken = useSelector((store) => store.user.accessToken);
  // if there is no accessToken then redirect to login
  useEffect(() => {
    if (!accessToken) {
      navigate('/signin');
    }
  }, [accessToken, navigate]);

  // const handleLogout = () => {
  //   dispatch(user.actions.logout());
  //   localStorage.removeItem('user');
  // };

  useEffect(() => {
    if (!accessToken) {
      navigate('/signin');
    }
  }, [accessToken, navigate]);

  return (
    <>
      <TheHeader />
      <CreateSlideOut />
      <HabitsSlideOut />
      <TodoSlideOut />
      <DashboardWrapper>
        <UpperWrapper>
          <HeroText>
            <Line></Line>
            <H2>What's on your mind?</H2>
            {/* <Thoughts /> */}
          </HeroText>
          {/* <Quote /> */}
          {/* <WeatherTest /> */}
          {/* <TimeTicker /> */}
        </UpperWrapper>

        <MainContentWrapper>
          <TodoList />
          <HabitList />
        </MainContentWrapper>
      </DashboardWrapper>
      <Footer />
    </>
  );
};

export default Dashboard;
