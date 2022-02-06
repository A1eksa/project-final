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
  RegularityWrapper,
  RegularityText,
  Label,
  Start,
  End,
  Dates,
} from './_HabitStyles';

export const HabitList = () => {
  const habitItems = useSelector((store) => store.habit.items);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  // const showEditSlideout = (item) => {
  //   // dispatch(editModal.actions.setSlideout(true));
  //   dispatch(editModal.actions.setEditSlideout(true));
  //   // dispatch(editModal.actions.setSelectedId(_id));
  //   dispatch(editModal.actions.setSelectedHabit(item));
  //   dispatch(editModal.actions.setSelectedHeading(item.heading));
  //   dispatch(editModal.actions.setSelectedDescription(item.description));
  //   console.log('habitId', item);
  // };

  const showEditSlideout = (item) => {
    batch(() => {
      // dispatch(editModal.actions.setSlideout(true));
      // dispatch(editModal.actions.setSelectedId(_id));
      dispatch(editModal.actions.setSelectedHabit(item));
      // dispatch(editModal.actions.setSelectedHeading(item.heading));
      // dispatch(editModal.actions.setSelectedDescription(item.description));
      dispatch(editModal.actions.setEditSlideout(true));
      // console.log('habitId line 36', item);
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

  const updateHabit = (habitId, description, heading) => {
    console.log(
      'habit Id:',
      habitId,
      'description:',
      description,
      'heading:',
      heading
    );
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: accessToken,
      },
      body: JSON.stringify({ description, heading, _id: habitId }),
    };

    fetch(API_URL(`habits/${habitId}/update`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data.response);
          dispatch(habit.actions.updateHabit(habitId));
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
              <HabitSubject>{items.heading}</HabitSubject>
              <HabitText>{items.description}</HabitText>
              <HabitTracker />
              <Dates>
                <Start>Duration {items.length}</Start>
                <Start>Regularity {items.regularity}</Start>
              </Dates>
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
                    {/* <HabitEditButton /> */}
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
              </BottomContainer>
            </CardWrapper>
          ))}
      </ListWrapper>
    </HabitWrapper>
  );
};
