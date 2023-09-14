import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    lang: "en",
    theme: "dark",
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
    changeTheme: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLang, changeTheme } = appConfigSlice.actions;

export default appConfigSlice.reducer;
