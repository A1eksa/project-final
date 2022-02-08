import { createSlice } from '@reduxjs/toolkit';

const habit = createSlice({
  name: 'habit',
  initialState: {
    items: [],
    heading: null,
    description: null,
    regularity: null,
    duration: null,
    regularityNumber: null,
    durationNumber: null,
    // error: null,
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
      const toggledHabit = store.items.find(
        (item) => item._id === action.payload
      );
      toggledHabit.isCompleted = !toggledHabit.isCompleted;
    },
    updateHabit: (store, action) => {
      const updatedHabits = store.items.map((item) => {
        if (item._id === action.payload._id) {
          item = action.payload;
          return item;
        } else {
          return item;
        }
      });
      store.items = updatedHabits;
      console.log('updatedHabit', updatedHabits);
    },
  },
});

export default habit;
