import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchData from "../utils/fetchData.js";

const getStatsData = createAsyncThunk("statsData", fetchData.callAPI);

const initialState = {
  requestState: {
    isDone: false,
    isLoading: false,
    hasError: false,
    alertType: "",
    alertText: "",
  },
  stats: {
    pending: 0,
    accepted: 0,
    rejected: 0
  },
  monthlyApplications: {
    date: '',
    count: 0
  }
};

const slice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    resetState: (state) => {
      return initialState;
    },
  },
  extraReducers: {
    [getStatsData.pending]: (state, { payload }) => {
      state.requestState.isLoading = true;
      state.requestState.hasError = false;
    },
    [getStatsData.fulfilled]: (state, { payload }) => {
      state.requestState.isLoading = false;
      state.requestState.isDone = true;
      state.requestState.hasError = false;
      state.monthlyApplications = payload.monthlyApplications;
      state.stats = payload.stats;
    },
    [getStatsData.rejected]: (state, { payload }) => {
      state.requestState.isDone = true;
      state.requestState.isLoading = false;
      state.requestState.hasError = true;
      state.requestState.alertType = "danger";
      state.requestState.alertText = payload.data;
    },
  },
});

export default slice.reducer;

export { getStatsData };

export const { resetState } = slice.actions;
