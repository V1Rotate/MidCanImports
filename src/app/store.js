import { configureStore } from '@reduxjs/toolkit';
import sectionReducer from '../features/sectionSlice';

export const store = configureStore({
  reducer: {
    section: sectionReducer,
  },
});
