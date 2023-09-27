//redux toolkit
import { configureStore } from "@reduxjs/toolkit";

//reducers
import authReducer from "./features/auth/AuthSlice";
import userReducer from "./features/user/userSlice";
import navbarReducer from "./features/navbar/NavbarSlice";
import jobReducer from "./features/jobs/JobsSlice";
import alertReducer from './features/alert/AlertSlice';
import filtersReducer from './features/filters/FiltersSlice';
import statisticsReducer from './features/stats/StatisticsSlice';

//store
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    navbar: navbarReducer,
    jobs: jobReducer,
    alert: alertReducer,
    filters: filtersReducer,
    statistics: statisticsReducer
  },
});

export default store;
