import Wrapper from "../Wrappers/Navbar.js";
import Logo from "./Logo.js";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiUserCircle } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";

import {
  toggleSidebar,
  toggleLogoutDropdown,
} from "../features/navbar/NavbarSlice.js";
import { useDispatch, useSelector } from "react-redux";
import logout from "../features/utils/logout.js";
import triggerAlert from "../features/utils/triggerAlert.js";
import { useEffect } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const { showLogout, showSidebar } = useSelector((state) => state.navbar);
  const userName = JSON.parse(localStorage.getItem("user")).name;

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    dispatch(
      triggerAlert({
        alertType: "success",
        alertText: "User logged out",
      })
    );
    dispatch(toggleLogoutDropdown());
  };

  const handleClick = (event) => {
    if (event.currentTarget.id === "logout")
      return dispatch(toggleLogoutDropdown());
  };

  return (
    <Wrapper>
      <div className="element-container">
        <div className="align-center">
          <RxHamburgerMenu
            className="hamburger pointer-cursor"
            onClick={handleToggleSidebar}
          />
        </div>
      </div>

      <div className="element-container">
        {showSidebar ? (
          <div className="align-center justify-center ">
            <h3>Dashboard</h3>
          </div>
        ) : (
          <div className="align-center justify-center">
            <Logo />
          </div>
        )}
      </div>

      <div className="element-container">
        <div className="align-center justify-right">
          <div className="logout-container">
            <button
              id="logout"
              className="primary pointer-cursor logout"
              onClick={handleClick}
            >
              <HiUserCircle className="logout-icon" />
              <p className="username">{userName}</p>
              <BiChevronDown className="logout-icon" />
            </button>
            <div className={`secondary ${!showLogout && "dropdown-hide"}`}>
              <button className="menu-item" onClick={handleLogout}>
                logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
