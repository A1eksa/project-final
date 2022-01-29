import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('editModal')
  ? {
      editSlideout: JSON.parse(localStorage.getItem('editModal')).editSlideout,
    }
  : {
      editSlideout: false,
    };

const editModal = createSlice({
  name: 'editModal',
  initialState,
  reducers: {
    setEditSlideout: (store, action) => {
      store.editSlideout = action.payload;
    },
  },
});

export default editModal;
