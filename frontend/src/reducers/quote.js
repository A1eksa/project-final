import { createSlice } from '@reduxjs/toolkit';

const quote = createSlice({
  name: 'quote',
  initialState: {
    _id: null,
    message: null,
    author: null,
    error: null,
  },
  reducers: {
    set_Id: (store, action) => {
      store._id = action.payload;
    },
    setMessage: (store, action) => {
      store.quote = action.payload;
    },
    setAuthor: (store, action) => {
      store.source = action.payload;
    },

    setError: (store, action) => {
      store.error = action.payload;
    },
  },
});

export default quote;
