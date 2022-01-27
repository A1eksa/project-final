import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// import { TodoForm } from './components/todo/TodoForm';
import Dashboard from './components/startPage/Dashboard';
import SignIn from './components/startPage/SignIn';
// import { HabitForm } from './components/habits/HabitForm';

import user from './reducers/user';
import habit from './reducers/habit';
// import { TodoList } from './components/todo/TodoList';
import todo from './reducers/todo';
import modal from './reducers/modal';

const reducer = combineReducers({
  user: user.reducer,
  habit: habit.reducer,
  todo: todo.reducer,
  modal: modal.reducer,
});

const store = configureStore({ reducer });

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          {/* <Route path='edit' element={<SlideOut />} /> */}
          {/* </Route> */}
          <Route path='/signin' element={<SignIn />} />

          {/* <Route path='/habitform' element={<HabitForm />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
