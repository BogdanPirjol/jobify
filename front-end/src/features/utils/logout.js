import { resetAppState } from "../user/userSlice";

const logoutThunk = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(resetAppState());
    }
}

export default logoutThunk;