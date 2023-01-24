import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../reducers/languige';
import authenticationReducer from '../reducers/authentication';

const store = configureStore({
  reducer: { languageReducer, authenticationReducer },
});

export default store;
