import { useEffect } from "react";
import Wrapper from "../Wrappers/Register";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import {
  setName,
  setEmail,
  setPassword,
  setConsistencyValidation,
  resetState,
  toggleHasAccount,
} from "../features/auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../components/Alert";
import {
  authenticateUser,
  resetAppState,
  toggleIsRequestFinished,
} from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import triggerAlert from "../features/utils/triggerAlert";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password, hasAccount, name } = useSelector(
    (state) => state.auth
  );
  const { isAuthenticated, user, token } = useSelector((state) => state.user);

  const { isLoadingAuthentication, hasErrorAuthentication, isRequestFinished, textError } =
    useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      addUserToLocalStorage({ user, token });
      const timeoutID = setTimeout(() => {
        navigate("/");
      }, 2000);
      dispatch(
        triggerAlert({
          alertType: "success",
          alertText: "User logged in! Redirecting ...",
          alertEffect: "load",
          showAlert: "show-alert",
        })
      );
      dispatch(toggleIsRequestFinished());
      return () => {
        clearTimeout(timeoutID);
      };
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if(hasErrorAuthentication){
      dispatch(triggerAlert({
        alertType: 'danger',
        alertText: textError
      }));
      dispatch(resetAppState());
    }
  }, [isRequestFinished]);

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("isAuthenticated", true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (!hasAccount && !name)) {
      dispatch(
        triggerAlert({
          alertType: "danger",
          alertText: "Please provide all values",
          alertEffect: "load",
          showAlert: "show-alert",
        })
      );
    }
    //fetch register request
    else {
      if (hasAccount) {
        dispatch(
          authenticateUser({
            method: "post",
            body: { email, password },
            url: "/api/v1/auth/login",
          })
        );
      } else {
        dispatch(
          authenticateUser({
            method: "post",
            body: { name, email, password },
            url: "/api/v1/auth/register",
          })
        );
      }
    }
  };

  const toggleMember = () => {
    dispatch(toggleHasAccount());
  };

  const handleChange = ({ target }) => {
    switch (target.id) {
      case "Name":
        dispatch(setName(target.value));
        break;
      case "Email":
        dispatch(setEmail(target.value));
        break;
      case "Password":
        dispatch(setPassword(target.value));
        break;
    }
  };

  return (
    <Wrapper>
      <Alert />
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{hasAccount ? "Login" : "Register"}</h3>
        {!hasAccount && (
          <FormRow
            name="Name"
            type="text"
            handleChange={handleChange}
            value={name}
          />
        )}
        <FormRow
          name="Email"
          type="email"
          handleChange={handleChange}
          value={email}
        />
        <FormRow
          name="Password"
          type="password"
          handleChange={handleChange}
          value={password}
        />
        <button
          type="submit"
          className="btn btn-block"
          disabled={isLoadingAuthentication}
        >
          {hasAccount ? "Login" : "Register"}
        </button>
        <p className="paragraph">
          {hasAccount
            ? "You haven`t an account yet?"
            : "Already have an account?"}
          <button type="button" className="btn link-btn" onClick={toggleMember}>
            {hasAccount ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
