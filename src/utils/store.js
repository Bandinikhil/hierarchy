import { configureStore } from '@reduxjs/toolkit';
import organizationReducer from './organizationSlice';

const store = configureStore({
  reducer: {
    organization: organizationReducer,
  },
});

export default store;


