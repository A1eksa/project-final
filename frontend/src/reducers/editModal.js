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
    setEditSlideout: (store, action) => {
      store.editSlideout = action.payload;
      // store.selectedId = action.payload;
      console.log('actionpayload', action.payload);
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
      // console.log('heading', action.payload);
    },
    setSelectedDescription: (store, action) => {
      store.selectedDescription = action.payload;
      // console.log('description', action.payload);
    },
  },
});

export default editModal;
