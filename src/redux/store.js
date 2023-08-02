import { configureStore } from '@reduxjs/toolkit';
import taskCreatorReducer from './taskCreatorSlice';
import taskCreateModalSlice from './taskCreateModalSlice';
import taskCompletedSlice from './taskCompletedSlice';
import navCloseSlice from './navCloseSlice';

const store = configureStore({
  reducer: {
    navClose:navCloseSlice,
    taskCompleted:taskCompletedSlice,
    taskCreator: taskCreatorReducer,
    ModalOpener: taskCreateModalSlice,
  },
});

export default store;