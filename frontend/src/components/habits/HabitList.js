import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { API_URL } from '../../utils/constants';
import { IconContext } from 'react-icons';
import { AiTwotoneEdit } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { HabitEditButton } from '../small components/HabitEditButton';
import habit from '../../reducers/habit';
import editModal from '../../reducers/editModal';

import {
  HabitWrapper,
  CardWrapper,
  ListWrapper,
  H2,
  HabitSubject,
  HabitText,
  LeftWrapper,
  Button,
} from './_HabitStyles';

export const HabitList = () => {
  const habitItems = useSelector((store) => store.habit.items);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  const showEditSlideout = (item) => {
    // dispatch(editModal.actions.setSlideout(true));
    dispatch(editModal.actions.setEditSlideout(true));
    // dispatch(editModal.actions.setSelectedId(_id));
    dispatch(editModal.actions.setSelectedHabit(item));
    dispatch(editModal.actions.setSelectedHeading(item.heading));
    dispatch(editModal.actions.setSelectedDescription(item.description));
    console.log('habitId line 36', item);
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
  }, [accessToken, userId, habitItems, dispatch]);

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
          console.log(data.response);
          // dispatch(todo.actions.setItems(accessToken, userId));
          dispatch(habit.actions.toggleHabit(habitId));
          dispatch(habit.actions.setErrors(null));
        } else {
          console.log('error');
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
              <HabitSubject>{items.heading}</HabitSubject>
              <HabitText>{items.description}</HabitText>
              <div>
                <LeftWrapper>
                  <IconContext.Provider
                    value={{
                      color: '#444444',
                      className: 'global-class-name',
                      size: '1.125rem',
                      style: { verticalAlign: 'middle', marginLeft: '0.05rem' },
                    }}
                  >
                    <Button onClick={() => deleteHabit(items._id)}>
                      <FaTimes />
                    </Button>
                    <Button onClick={() => showEditSlideout(items)}>
                      <AiTwotoneEdit />
                    </Button>
                    <HabitEditButton />
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
              </div>
            </CardWrapper>
          ))}
      </ListWrapper>
    </HabitWrapper>
  );
};
