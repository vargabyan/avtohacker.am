import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
}

const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (store) => {
      store.value = true
    },
    logout: (store) => {
      store.value = false
    }
  }
});

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;