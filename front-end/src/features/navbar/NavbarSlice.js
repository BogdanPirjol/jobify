import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: true,
  showLogout: false,
};

const options = {
  name: "navbar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    toggleLogoutDropdown: (state) => {
      state.showLogout = !state.showLogout;
    },
  },
};

const slice = createSlice(options);

export const { toggleSidebar, toggleLogoutDropdown } = slice.actions;

export default slice.reducer;
