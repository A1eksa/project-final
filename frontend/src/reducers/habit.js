import { createSlice } from '@reduxjs/toolkit';

const habit = createSlice({
  name: 'habit',
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
    deleteHabit: (store, action) => {
      const decreasedHabits = store.items.filter(
        (item) => item._id !== action.payload
      );
      store.items = decreasedHabits;
    },
  },
});

export default habit;
