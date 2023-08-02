import { createSlice } from '@reduxjs/toolkit';

const taskCreatorSlice = createSlice({
  name: 'taskCreator',
  initialState: {
    activeButtons: [],
    isCompleted: {}, 
  },
  reducers: {
    toggleButton: (state, action) => {
      const buttonId = action.payload;
      const isActive = state.activeButtons.includes(buttonId);
      if (isActive) {
        state.activeButtons = state.activeButtons.filter((id) => id !== buttonId);
      } else {
        state.activeButtons.push(buttonId);
      }
    },
  },
});

export const { toggleButton } = taskCreatorSlice.actions;
export default taskCreatorSlice.reducer;
