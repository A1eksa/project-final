import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('editTodoModal')
  ? {
      editTodoSlideout: JSON.parse(localStorage.getItem('editTodoModal'))
        .editTodoSlideout,
    }
  : {
      editTodoSlideout: false,
    };

const editTodoModal = createSlice({
  name: 'editTodoModal',
  initialState,
  reducers: {
    setEditTodoSlideout: (store, action) => {
      store.editTodoSlideout = action.payload;
    },
  },
});

export default editTodoModal;
