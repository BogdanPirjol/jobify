import { triggerAlert, hideAlert, clearAlert, pauseAnimation } from "../alert/AlertSlice.js";

const triggerAlertThunk = (alertData) => {
    return (dispatch, getState) => {
        if(getState().alert.showAlert === 'show-alert'){
            dispatch(pauseAnimation());
            dispatch(hideAlert());
            setTimeout(() => {
                dispatch(clearAlert());
                dispatch(triggerAlert(alertData));
            }, 700);
        }else{
            dispatch(triggerAlert(alertData));
        }
    }
}

export default triggerAlertThunk;