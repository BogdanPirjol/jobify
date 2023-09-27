import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  jobType: null,
  jobStatus: null,
  sorting: "newest",
  page: 1,
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
      state.page = 1;
    },
    setJobType: (state, { payload }) => {
      state.jobType = payload;
      state.page = 1;
    },
    setJobStatus: (state, { payload }) => {
      state.jobStatus = payload;
      state.page = 1;
    },
    setSortType: (state, { payload }) => {
      state.sorting = payload;
      state.page = 1;
    },
    setPageCount: (state, { payload }) => {
      state.page = payload;
    },
    clearFilters: (state) => {
      return initialState;
    },
  },
});

export const {
  setSearchTerm,
  setJobStatus,
  setJobType,
  setSortType,
  clearFilters,
  setPageCount
} = slice.actions;

export default slice.reducer;
