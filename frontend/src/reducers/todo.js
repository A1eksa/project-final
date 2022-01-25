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
    setNewItems: (store, action) => {
      store.items = [action.payload, ...store.items];
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
  },
});

export default todo;
