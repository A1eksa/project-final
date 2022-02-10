import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Dashboard } from './components/dashboard/Dashboard';
import { SignIn } from './components/signupin/SignIn';

import user from './reducers/user';
import habit from './reducers/habit';
import todo from './reducers/todo';
import modal from './reducers/modal';
import editModal from './reducers/editModal';
import quote from './reducers/quote';

const reducer = combineReducers({
  user: user.reducer,
  habit: habit.reducer,
  todo: todo.reducer,
  modal: modal.reducer,
  editModal: editModal.reducer,
  quote: quote.reducer,
});

const store = configureStore({ reducer });

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
