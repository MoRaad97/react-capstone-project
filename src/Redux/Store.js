import { configureStore } from '@reduxjs/toolkit';
import DataSlice from './Data_Reducer';

const store = configureStore({
  reducer: {
    countries: DataSlice,
  },
});

export default store;
