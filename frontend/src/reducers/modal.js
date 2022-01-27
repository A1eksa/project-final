import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('modal')
  ? {
      slideout: JSON.parse(localStorage.getItem('modal')).slideout,
    }
  : {
      slideout: false,
    };

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setSlideout: (store, action) => {
      store.slideout = action.payload;
    },
  },
});

export default modal;
