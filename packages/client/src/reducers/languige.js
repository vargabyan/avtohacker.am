import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'AM',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (store, action) => {
      const result = action.payload;
      store.value = result;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
