import axios from "axios";
import logout from "../utils/logout.js";

const callAPI = async (
  { method, url, body, params, requireAuth = false, sideEffect = null },
  { dispatch, getState, rejectWithValue }
) => {
  const config = {
    method,
    url,
    data: body,
    params
  };
  if (requireAuth) {
    config["headers"] = {
      Authorization: `Bearer ${getState().user.token}`,
    };
  }
  try {
    const { data, status, statusText } = await axios(config);
    if (sideEffect) {
      //momentary used in update user to persist data
      sideEffect(data);
    }
    console.log(status, statusText);
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      if(getState().user.isAuthenticated)
        dispatch(logout());
      return rejectWithValue({
        code: error.code,
        message: error.message,
        data: error.response.data,
      });
    }
    return rejectWithValue({
      code: error.code,
      message: error.message,
      data: error.response.data,
    });
  }
};

export default {
  callAPI,
};
