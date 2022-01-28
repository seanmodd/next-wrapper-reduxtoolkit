import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/toolkitSliceAndApollo';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
