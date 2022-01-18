import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoForm from './components/todo/TodoForm';
import Dashboard from './components/startPage/Dashboard';
import SignIn from './components/startPage/SignIn';

import user from './reducers/user';
import { Provider } from 'react-redux';

const reducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({ reducer });

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/todoform' element={<TodoForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
