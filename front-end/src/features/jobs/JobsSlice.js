import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchData from "../utils/fetchData.js";

const createJob = createAsyncThunk("createJob", fetchData.callAPI);
const getAllJobs = createAsyncThunk("getAllJobs", fetchData.callAPI);
const deleteJob = createAsyncThunk("deleteJob", fetchData.callAPI);
const updateJob = createAsyncThunk("updateJob", fetchData.callAPI);

const initialState = {
  isEditing: false,
  jobsList: {
    count: 0,
    rows: [],
  },
  fetchJobs: true,
  addJob: {
    editingJobId: "",
    position: "",
    company: "",
    location: "",
    statuses: ["pending", "rejected", "accepted"],
    types: ["full-time", "part-time", "remote"],
    status: "pending",
    type: "full-time",
  },
  requestState: {
    isLoading: false,
    hasError: false,
    statusMessage: null,
    requestStatus: "",
    isDone: false,
  },
};

const options = {
  name: "jobs",
  initialState,
  reducers: {
    setJobDetails: (state, { payload }) => {
      state.addJob[payload.key] = payload.value;
    },
    resetState: (state) => {
      state.fetchJobs = false;
    },
    resetRequestState: (state) => {
      return {
        ...state,
        requestState: initialState.requestState,
      };
    },
    rewindJobs: (state) => {
      state.fetchJobs = true;
    },
    clearAddJob: (state) => {
      state.addJob = initialState.addJob;
      state.requestState = initialState.requestState;
      state.isEditing = initialState.isEditing;
    },
    editJob: (state, { payload }) => {
      state.isEditing = payload.isEditing;
    },
  },
  extraReducers: {
    //createJob/////////////////////////////////////////////////
    [createJob.pending]: (state) => {
      state.requestState.isLoading = true;
      state.requestState.hasError = false;
    },
    [createJob.fulfilled]: (state, { payload }) => {
      state.requestState.isLoading = false;
      state.requestState.hasError = false;
      state.requestState.isDone = true;
    },
    [createJob.rejected]: (state, { payload }) => {
      state.requestState.isLoading = false;
      state.requestState.hasError = true;
      state.requestState.isDone = true;
      state.requestState.statusMessage = `${payload.data.msg}`;
      state.requestState.requestStatus = "danger";
    },
    //createJob/////////////////////////////////////////////////

    //fetch jobs/////////////////////////////////////////////////
    [getAllJobs.pending]: (state) => {
      state.requestState.isLoading = true;
      state.requestState.hasError = false;
    },
    [getAllJobs.fulfilled]: (state, { payload }) => {
      state.jobsList = payload;
      state.requestState.isLoading = false;
      state.requestState.hasError = false;
      state.showJobs = true;
    },
    [getAllJobs.rejected]: (state, { payload }) => {
      state.requestState.isLoading = false;
      state.requestState.hasError = true;
      state.requestState.isDone = true;
    },

    //fetch jobs/////////////////////////////////////////////////

    //delete jobs/////////////////////////////////////////////////
    [deleteJob.pending]: (state) => {
      state.requestState.isLoading = true;
      state.requestState.hasError = false;
    },
    [deleteJob.fulfilled]: (state, { payload }) => {
      state.requestState.isLoading = false;
      state.requestState.hasError = false;
      state.jobsList.rows = state.jobsList.rows.filter(
        (job) => job.id !== payload.jobId
      );
    },
    [deleteJob.rejected]: (state) => {},
    //delete jobs/////////////////////////////////////////////////

    //update job//////////////////////////////////////////////////
    [updateJob.pending]: (state) => {
      state.requestState.isLoading = true;
      state.requestState.hasError = false;
    },
    [updateJob.fulfilled]: (state, { payload }) => {
      state.requestState.isLoading = false;
      state.requestState.hasError = false;
      state.requestState.isDone = true;
    },
    [updateJob.rejected]: (state, { payload }) => {
      console.log(payload);
      state.requestState.isLoading = false;
      state.requestState.hasError = true;
      state.requestState.isDone = true;
      state.requestState.statusMessage = `${payload.data.msg}`;
      state.requestState.requestStatus = "danger";
    },
    //update job//////////////////////////////////////////////////
  },
};

const slice = createSlice(options);

export const {
  setJobDetails,
  resetState,
  resetRequestState,
  clearAddJob,
  editJob,
} = slice.actions;

export { createJob, getAllJobs, deleteJob, updateJob };

export default slice.reducer;
