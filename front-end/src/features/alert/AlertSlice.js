import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertType: "",
  alertText: "",
  alertEffect: "",
  showAlert: "hide-alert",
  alertPlayState: 'running'
};

const options = {
  name: "alert",
  initialState,
  reducers: {
    triggerAlert: (
      state,
      { payload: { alertText, alertType} }
    ) => {
      state.alertType = alertType;
      state.alertText = alertText;
      state.alertPlayState = 'running';
      state.alertEffect = "load";
      state.showAlert = "show-alert";
    },
    clearAlert: (state) => {
      state.alertEffect = "";
    
    },
    hideAlert: (state) => {
      state.showAlert = "hide-alert";
    },
    pauseAnimation: (state) => {
      state.alertPlayState = '';
    }
  },
};

const slice = createSlice(options);

export default slice.reducer;

export const { triggerAlert, clearAlert, hideAlert, pauseAnimation } = slice.actions;
