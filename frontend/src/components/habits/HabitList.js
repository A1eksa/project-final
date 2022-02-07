import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';

import { API_URL } from '../../utils/constants';
import { IconContext } from 'react-icons';
import { AiTwotoneEdit } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { HabitEditButton } from '../small components/HabitEditButton';
import habit from '../../reducers/habit';
import editModal from '../../reducers/editModal';
// import { RealProgress } from '../small components/RealProgress';
import { HabitTracker } from '../small components/HabitTracker';

import {
  HabitWrapper,
  CardWrapper,
  ListWrapper,
  H2,
  HabitSubject,
  HabitText,
  BottomContainer,
  LeftWrapper,
  DeleteButton,
  EditButton,
  Label,
  Value,
  TimeWrapper,
  Wrapper,
  CardDivider,
  Subject,
  Left,
} from './_HabitStyles';

export const HabitList = () => {
  const habitItems = useSelector((store) => store.habit.items);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  const showEditSlideout = (item) => {
    batch(() => {
      dispatch(editModal.actions.setSelectedHabit(item));
      dispatch(editModal.actions.setEditSlideout(true));
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    };

    fetch(API_URL(`habits/${userId}`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(habit.actions.setItems(data.response));
          dispatch(habit.actions.setErrors(null));
        } else {
          dispatch(habit.actions.setItems([]));
          dispatch(habit.actions.setErrors(data.response));
        }
      });
  }, [accessToken, userId, dispatch]);

  const deleteHabit = (habitId) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({ user: userId }),
    };
    fetch(API_URL(`habits/${habitId}`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(habit.actions.setErrors(null));
          dispatch(habit.actions.deleteHabit(habitId));
        } else {
          dispatch(habit.actions.setItems([]));
          dispatch(habit.actions.setErrors(data.response));
        }
      });
  };

  const onToggleHabit = (habitId, isCompleted) => {
    console.log(habitId, isCompleted);

    const options = {
      method: 'PATCH',
      body: JSON.stringify({
        isCompleted: !isCompleted,
        _id: habitId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(API_URL(`habits/${habitId}/completed`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(habit.actions.toggleHabit(habitId));
          dispatch(habit.actions.setErrors(null));
        } else {
          dispatch(habit.actions.setErrors(data.response));
        }
      });
  };

  return (
    <HabitWrapper>
      <H2>Your habits</H2>
      <ListWrapper>
        {habitItems &&
          habitItems.map((items) => (
            <CardWrapper key={items._id}>
              <CardDivider>
                <Left>
                  <Subject>
                    <HabitSubject>{items.heading}</HabitSubject>
                    <HabitText>{items.description}</HabitText>
                  </Subject>
                  <TimeWrapper>
                    <Wrapper>
                      <Label>Duration</Label>
                      <Value>{items.length}</Value>
                    </Wrapper>
                    <Wrapper>
                      <Label>Regularity</Label>
                      <Value>{items.regularity}</Value>
                    </Wrapper>
                  </TimeWrapper>
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
                    <DeleteButton onClick={() => deleteHabit(items._id)}>
                      <FaTimes />
                    </DeleteButton>
                    <EditButton onClick={() => showEditSlideout(items)}>
                      <AiTwotoneEdit />
                    </EditButton>
                  </IconContext.Provider>
                </LeftWrapper>
                <div>
                  <input
                    className='checkbox'
                    name={items._id}
                    id={items._id}
                    type='checkbox'
                    checked={items.isCompleted}
                    onChange={() => onToggleHabit(items._id, items.isCompleted)}
                  />
                </div>
              </BottomContainer>
                </Left>
                <HabitTracker />
              </CardDivider>
            </CardWrapper>
          ))}
      </ListWrapper>
    </HabitWrapper>
  );
};
