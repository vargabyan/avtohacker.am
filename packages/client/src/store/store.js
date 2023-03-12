import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../reducers/authentication';

const store = configureStore({
  reducer: { authenticationReducer },
});

export default store;
