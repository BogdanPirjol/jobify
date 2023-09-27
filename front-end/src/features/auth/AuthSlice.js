import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  hasAccount: false,
  consistencyValidation: false,
  isLoading: false,
  hasError: false,
  authType: "register",
};

const options = {
  name: "auth",
  initialState,
  reducers: {
    setName: (state, { payload }) => {
      state.name = payload;
    },
    setEmail: (state, { payload }) => {
      state.email = payload;
    },
    setPassword: (state, { payload }) => {
      state.password = payload;
    },
    toggleHasAccount: (state) => {
      state.hasAccount = !state.hasAccount;
      state.authType = state.authType === "register" ? "login" : "register";
    },
    resetState: (state) => {
      return initialState;
    },
  },
};

const slice = createSlice(options);

export const {
  setName,
  resetState,
  setEmail,
  setPassword,
  toggleHasAccount,
  setConsistencyValidation,
} = slice.actions;

export default slice.reducer;
