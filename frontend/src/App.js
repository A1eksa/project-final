import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoForm from './components/todo/TodoForm';
import SignUp from './components/startPage/SignUp';
import SignIn from './components/startPage/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        {/* <Route path='/signin' element={<SignIn />} /> */}
        <Route path='/todoform' element={<TodoForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
