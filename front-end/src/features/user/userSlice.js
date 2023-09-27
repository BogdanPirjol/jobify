import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchData from "../utils/fetchData.js";

//default state
const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");
const isAuthenticated = localStorage.getItem("isAuthenticated");

const initialState = {
  isAuthenticated: isAuthenticated || false,
  user: user || null,
  token: token || null,
  isLoadingAuthentication: false,
  hasErrorAuthentication: false,
  isLoadingUpdate: false,
  hasErrorUpdate: false,
  isRequestFinished: false,
  isUserUpdated: false
};

//extra reduers
const authenticateUser = createAsyncThunk("authenticate", fetchData.callAPI);

const registerUser = createAsyncThunk("register", fetchData.callAPI);

const updateUser = createAsyncThunk("updateUser", fetchData.callAPI);
//end extra reducers

const options = {
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      const [[key, value]] = Object.entries(payload);
      state.user[key] = value;
    },
    resetAppState: () => {
      return {
        isAuthenticated: false,
        user: null,
        token: null,
        isLoadingAuthentication: false,
        hasErrorAuthentication: false,
        isLoadingUpdate: false,
        hasErrorUpdate: false,
        isRequestFinished: false,
        isUserUpdated: false
      };
    },
    toggleIsRequestFinished: (state) => {
      state.isRequestFinished = false;
    },
  },
  extraReducers: {
    //authenticate user
    [authenticateUser.pending]: (state) => {
      state.isLoadingAuthentication = true;
      state.hasErrorAuthentication = false;
    },
    [authenticateUser.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoadingAuthentication = false;
      state.hasErrorAuthentication = false;
      state.isAuthenticated = true;
      state.isRequestFinished = true;
    },
    [authenticateUser.rejected]: (state, { payload }) => {
      state.textError = payload.data.msg;
      state.isLoadingAuthentication = false;
      state.hasErrorAuthentication = true;
      state.isRequestFinished = true;
    },
    //end authenticate user

    //update user
    [updateUser.fulfilled]: (state, { payload }) => {
      state.isLoadingUpdate = false;
      state.hasErrorUpdate = false;
      state.isRequestFinished = true;
      state.isUserUpdated = true;
    },
    [updateUser.pending]: (state) => {
      state.isLoadingUpdate = true;
      state.hasErrorUpdate = false;
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.textError = payload.data.msg;
      state.isLoadingUpdate = false;
      state.hasErrorUpdate = true;
      state.isRequestFinished = true;
    },
    //end update user

    //register
    [registerUser.pending]: (state) => {},
    [registerUser.fulfilled]: (state, payload) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoadingAuthentication = false;
      state.hasErrorAuthentication = false;
      state.isAuthenticated = true;
      state.isRequestFinished = true;
    },
    [registerUser.rejected]: (state) => {},
    //end register
  },
};

const slice = createSlice(options);

export default slice.reducer;

export const { setUserData, resetAppState, toggleIsRequestFinished } =
  slice.actions;

export { authenticateUser, updateUser };
