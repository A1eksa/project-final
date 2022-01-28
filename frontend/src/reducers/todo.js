import { createSlice } from '@reduxjs/toolkit';

const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [],
    error: null,
  },
  reducers: {
    setItems: (store, action) => {
      store.items = action.payload;
    },
    setErrors: (store, action) => {
      store.error = action.payload;
    },
    deleteTodo: (store, action) => {
      const decreasedTodos = store.items.filter(
        (item) => item._id !== action.payload
      );
      store.items = decreasedTodos;
    },
    toggleTodo: (store, action) => {
      const toggledTodo = store.items.filter(
        (item) => item._id === action.payload
      );
      toggledTodo.isCompleted = !toggledTodo.isCompleted;
    },
  },
});

export default todo;
