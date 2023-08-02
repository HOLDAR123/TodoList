
import { createSlice } from "@reduxjs/toolkit";

const taskCompletedSlice = createSlice({
  name: "taskCompleted",
  initialState: {
    completedTasks: [],       
    selectedTaskToDelete: null, 
  },
  reducers: {
    toggleCompleted: (state, action) => {
      const taskId = action.payload;
      if (state.completedTasks.includes(taskId)) {
        state.completedTasks = state.completedTasks.filter((id) => id !== taskId);
      } else {
        state.completedTasks.push(taskId);
      }
    },
    setSelectedTaskToDelete: (state, action) => {
      state.selectedTaskToDelete = action.payload;
    },
  },
});

export const { toggleCompleted, setSelectedTaskToDelete } = taskCompletedSlice.actions;

export default taskCompletedSlice.reducer;
