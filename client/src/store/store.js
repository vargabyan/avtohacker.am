import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../reducers/languige";
import authenticationReducer from "../reducers/authentication";

export const store = configureStore({
  reducer: {languageReducer, authenticationReducer}
}) 