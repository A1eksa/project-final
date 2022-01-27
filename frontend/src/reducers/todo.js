import { createSlice } from '@reduxjs/toolkit';

const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [],
    error: null,
    // isComplete: false,
  },
  reducers: {
    setItems: (store, action) => {
      store.items = action.payload;
    },
    // setNewItems: (store, action) => {
    //   store.items = [action.payload, ...store.items];
    // },
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

    // setEdit: (store, action) => {
    //   const editedTodos = store.items.filter(
    //     (item) => (item._id = action.payload)
    //   );
    //   store.items = editedTodos;
    // },
  },
});

export default todo;
