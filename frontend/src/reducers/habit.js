import { createSlice } from '@reduxjs/toolkit';

const habit = createSlice({
  name: 'habit',
  initialState: {
    items: [],
    heading: null,
    description: null,
    error: null,
    slideout: false,
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
    deleteHabit: (store, action) => {
      const decreasedHabits = store.items.filter(
        (item) => item._id !== action.payload
      );
      store.items = decreasedHabits;
    },
    toggleHabit: (store, action) => {
      const toggledHabit = store.items.filter(
        (item) => item._id === action.payload
      );
      toggledHabit.isCompleted = !toggledHabit.isCompleted;
    },
    updateHabit: (store, action) => {
      const updatedHabit = store.items.filter(
        (item) => item._id === action.payload
      );
      store.items = updatedHabit;
      console.log('updateHabit', action.payload);
    },
    // updateHabit: (store, action) => {
    //   store.items.patch(action.payload);
    //   console.log('updateHabit', action.payload);
    // },
  },
});

export default habit;
