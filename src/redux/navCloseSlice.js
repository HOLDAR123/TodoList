import { createSlice } from "@reduxjs/toolkit";

const navCloseSlice = createSlice({
  name: 'navClose',
  initialState: {
    isNavbarOpen: true
  },
  reducers: {
    setIsNavbarOpen: (state, action) => {
      state.isNavbarOpen = action.payload; 
    }
  }
});

export const { setIsNavbarOpen } = navCloseSlice.actions;
export default navCloseSlice.reducer;
