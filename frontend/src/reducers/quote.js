import { createSlice } from '@reduxjs/toolkit';

const quote = createSlice({
  name: 'quote',
  initialState: {
    // _id: null,
    message: null,
    author: null,
    error: null,
  },
    // quoteId: (store, action) => {
    //   store._id = action.payload;
    // },
    setMessage: (store, action) => {
      store.message = action.payload;
    },
    setAuthor: (store, action) => {
      store.author = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
});

export default quote;
