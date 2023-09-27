import Wrapper from "../../Wrappers/Profile.js";
import FormRow from "../../components/FormRow";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserData,
  updateUser,
  toggleIsRequestFinished,
} from "../../features/user/userSlice.js";
import { useEffect } from "react";
import triggerAlert from "../../features/utils/triggerAlert.js";

const Profile = () => {
  const {
    user: userData,
    isLoadingUpdate,
    hasErrorUpdate,
    isRequestFinished,
    textError
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const updateValue = ({ target }) => {
    switch (target.id) {
      case "name":
        dispatch(
          setUserData({
            name: target.value,
          })
        );
        break;
      case "last name":
        dispatch(
          setUserData({
            lastName: target.value,
          })
        );
        break;
      case "email":
        dispatch(
          setUserData({
            email: target.value,
          })
        );
        break;
      case "location":
        dispatch(
          setUserData({
            location: target.value,
          })
        );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !userData.name ||
      !userData.email ||
      !userData.location ||
      !userData.lastName
    ) {
      dispatch(
        triggerAlert({
          alertText: "Please fill all fields!",
          alertType: "danger",
          alertEffect: "load",
        })
      );
      return;
    }
    dispatch(
      updateUser({
        method: "patch",
        requireAuth: true,
        body: {
          name: userData.name,
          lastName: userData.lastName,
          email: userData.email,
          location: userData.location,
        },
        url: "/api/v1/user/update-user",
        sideEffect: (userData) => {
          //persist response changes to local storage
          localStorage.setItem("user", JSON.stringify(userData.user));
          localStorage.setItem("token", userData.token);
        },
      })
    );
  };

  useEffect(() => {
    if (isRequestFinished) {
      dispatch(toggleIsRequestFinished());
      if (!hasErrorUpdate) {
        dispatch(
          triggerAlert({
            alertType: "success",
            alertText: "Changes saved successfully",
          })
        );
      }else{
        dispatch(triggerAlert({
          alertType: 'danger',
          alertText: textError
        }));
      }
    }
  }, [isRequestFinished]);

  return (
    <Wrapper>
      <div className="content-center">
        <h2>Profile</h2>
        <form onSubmit={handleSubmit}>
          <FormRow
            name={"name"}
            type={"text"}
            value={userData.name}
            handleChange={updateValue}
          >
            Name
          </FormRow>
          <FormRow
            name={"last name"}
            type={"text"}
            value={userData.lastName}
            handleChange={updateValue}
          >
            Last Name
          </FormRow>
          <FormRow
            name={"location"}
            type={"text"}
            value={userData.location}
            handleChange={updateValue}
          >
            Location
          </FormRow>
          <FormRow
            name={"email"}
            type={"email"}
            value={userData.email}
            handleChange={updateValue}
          >
            Email
          </FormRow>

          <button
            className="btn form-btn"
            type="submit"
            disabled={isLoadingUpdate}
          >
            {" "}
            Save Changes{" "}
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Profile;
