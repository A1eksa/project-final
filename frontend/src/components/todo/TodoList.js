import React, { useEffect } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
// import Moment from 'moment';

import { IconContext } from 'react-icons';
import { AiTwotoneEdit } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { API_URL } from '../../utils/constants';
import todo from '../../reducers/todo';
// import modal from '../../reducers/modal';
import editModal from '../../reducers/editModal';

import {
  H2,
  ListWrapper,
  CardWrapper,
  TodoSubject,
  TodoText,
  Category,
  Button,
  Label,
  // InputLabel,
  CategoryWrapper,
  //CustomCheckbox,
  //HiddenCheckbox,
  // CheckboxContainer,
  BottomContainer,
  LeftWrapper,
  // DeleteIcon,
} from '../todo/_TodoStyles';

export const TodoList = () => {
  // const date = Moment()
  const todoItems = useSelector((store) => store.todo.items);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  // const showSlideOut = () => {
  //   dispatch(modal.actions.setSlideout(true));
  // };

  // const showTodoSlideOut = (item) => {
  //   dispatch(editModal.actions.setSelectedTodo(item));
  //   dispatch(editModal.actions.setEditSlideout(true));
  // };

  const showEditSlideout = (item) => {
    batch(() => {
      // dispatch(editModal.actions.setSlideout(true));
      // dispatch(editModal.actions.setSelectedId(_id));
      dispatch(editModal.actions.setSelectedTodo(item));
      // dispatch(editModal.actions.setSelectedHeading(item.heading));
      // dispatch(editModal.actions.setSelectedDescription(item.description));
      dispatch(editModal.actions.setEditSlideout(true));
      // console.log('habitId line 36', item);
    });
  };

  // const onToggleTodo = () => {
  //   dispatch(todo.actions.toggleTodo(true));
  // };

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
  }, [accessToken, dispatch, userId]);

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
          dispatch(todo.actions.deleteTodo(todoId));
          dispatch(todo.actions.setErrors(null));
        } else {
          dispatch(todo.actions.setItems([]));
          dispatch(todo.actions.setErrors(data.response));
        }
      });
  };

  const onToggleTodo = (todoId, isCompleted) => {
    console.log(todoId, isCompleted);
    const options = {
      method: 'PATCH',
      body: JSON.stringify({
        isCompleted: !isCompleted,
        _id: todoId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(API_URL(`todo/${todoId}/completed`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data.response);
          dispatch(todo.actions.toggleTodo(todoId));
          dispatch(todo.actions.setErrors(null));
        } else {
          console.log('error');
          dispatch(todo.actions.setErrors(data.response));
        }
      });
  };

  return (
    <>
      <ListWrapper>
        <H2>Your todos</H2>
        {todoItems &&
          todoItems.map((items) => (
            <CardWrapper key={items._id}>
              <CategoryWrapper>
                <Label>Category </Label>
                <Category>{items.category}</Category>
              </CategoryWrapper>
              <TodoSubject>{items.heading}</TodoSubject>
              <TodoText>{items.message}</TodoText>
              <div>
                <p>Due date {items.dueDate}</p>
              </div>
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
                    <Button onClick={() => deleteTodo(items._id)}>
                      <FaTimes />
                    </Button>
                    <Button onClick={() => showEditSlideOut(item)}>
                      <AiTwotoneEdit />
                    </Button>
                  </IconContext.Provider>
                </LeftWrapper>
                <div>
                  <input
                    className='checkbox'
                    name={items._id}
                    id={items._id}
                    type='checkbox'
                    checked={items.isCompleted}
                    onChange={() => onToggleTodo(items._id, items.isCompleted)}
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
    </>
  );
};
