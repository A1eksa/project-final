import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('editModal')
  ? {
      editSlideout: JSON.parse(localStorage.getItem('editModal')).editSlideout,
      // selectedId: JSON.parse(localStorage.getItem('editModal')).selectedId,
    }
  : {
      editSlideout: false,
      // selectedId: '',
    };

const editModal = createSlice({
  name: 'editModal',
  initialState,
  reducers: {
    // HABIT //
    setEditSlideout: (store, action) => {
      store.editSlideout = action.payload;
    },
    setSelectedId: (store, action) => {
      store.selectedId = action.payload;
      console.log('actionpayload ID', action.payload);
    },
    setSelectedHabit: (store, action) => {
      store.selectedHabit = action.payload;
      console.log('actionpayload', action.payload);
    },
    setSelectedHeading: (store, action) => {
      store.selectedHeading = action.payload;
    },
    setSelectedDescription: (store, action) => {
      store.selectedDescription = action.payload;
    },

    // TODO //
    setEditTodoSlideout: (store, action) => {
      store.editTodoSlideout = action.payload;
    },
    setSelectedTodoId: (store, action) => {
      store.selectedTodoId = action.payload;
    },
    setSelectedTodo: (store, action) => {
      store.selectedTodo = action.payload;
    },
    setSelectedTodoHeading: (store, action) => {
      store.selectedTodoHeading = action.payload;
    },
    setSelectedMessage: (store, action) => {
      store.selectedMessage = action.payload;
    },
    setSelectedCategory: (store, action) => {
      store.selectedCategory = action.payload;
    },
    setSelectedDueDate: (store, action) => {
      store.selectedDueDate = action.payload;
    },
  },
});

export default editModal;
