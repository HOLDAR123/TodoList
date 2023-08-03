import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: null,
};

const modalOpenerSlice = createSlice({
  name: "modalOpener",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.isModal = action.payload;
    },
  },
});

export const { toggleModal } = modalOpenerSlice.actions;

export default modalOpenerSlice.reducer;