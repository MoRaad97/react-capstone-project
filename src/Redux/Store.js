import { configureStore } from '@reduxjs/toolkit';
import DataSlice from './mainReducer';

const store = configureStore({
  reducer: {
    countries: DataSlice,
  },
});

export default store;