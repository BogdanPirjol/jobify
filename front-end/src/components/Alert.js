import Wrapper from "../Wrappers/Alert";
import { useSelector } from "react-redux";
import { GoAlert } from "react-icons/go";
import { TbCircleCheckFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { clearAlert, hideAlert } from "../features/alert/AlertSlice";

const Alert = () => {
  const { alertType, alertText, showAlert, alertEffect, alertPlayState } = useSelector(
    (state) => state.alert
  );
  const dispatch = useDispatch();

  const handleAnimationEnd = () => {
    dispatch(hideAlert());
  };

  const handleT = () => {
    if(showAlert === 'hide-alert'){
      dispatch(clearAlert());
    }
  }

  return (
    <Wrapper
      className={`alert ${showAlert} ${alertType} ${alertEffect} ${alertPlayState}`}
      onAnimationEnd={handleAnimationEnd}
      onTransitionEnd={handleT}
    >
      <div className="icon center">
        {alertType === "danger" ? (
          <GoAlert className="warning-icon svg-icon" />
        ) : (
          <TbCircleCheckFilled className="success-icon svg-icon" />
        )}
      </div>
      <div
        className={`message center ${
          alertType === "danger" ? "danger-message" : "success-message"
        }`}
      >
        <p>{alertText}</p>
      </div>
    </Wrapper>
  );
};

export default Alert;
