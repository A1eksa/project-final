import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TodoList } from '../todo/TodoList';
import { HabitList } from '../habits/HabitList';
import { CreateSlideOut } from '../modal/CreateSlideOut';
import { HabitsSlideOut } from '../modal/HabitsSlideOut';
import { TodoSlideOut } from '../modal/TodoSlideOut';
import { TheHeader } from '../header/TheHeader';
import { Footer } from '../footer/Footer';
// import { Quote } from '../quotes/Quote';
import { WeatherTest } from '../dateTimeWeather/WeatherTest';
import '../modal/SlideOut.css';

import {
  DashboardWrapper,
  MainContentWrapper,
  H2,
  Line,
  HeroText,
  UpperWrapper,
  Left,
} from './_DashboardStyles';

export const Dashboard = () => {
  const navigate = useNavigate();

  const accessToken = useSelector((store) => store.user.accessToken);
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
          <Left>
            <HeroText>
              <Line></Line>
              <H2>What's on your mind?</H2>
            </HeroText>
            {/* <Quote /> */}
          </Left>
          <WeatherTest />
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
