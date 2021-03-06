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
      const toggledTodo = store.items.find(
        (item) => item._id === action.payload
      );
      toggledTodo.isCompleted = !toggledTodo.isCompleted;
    },
    updateTodo: (store, action) => {
      const updatedTodos = store.items.map((item) => {
        if (item._id === action.payload._id) {
          item = action.payload;
          return item;
        } else {
          return item;
        }
      });
      store.items = updatedTodos;
    },
  },
});

export default todo;
