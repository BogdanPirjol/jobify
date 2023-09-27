import Wrapper from "../Wrappers/SmallSidebar";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import { ImProfile } from "react-icons/im";
import { MdOutlineQueryStats } from "react-icons/md";
import { TbListSearch } from "react-icons/tb";
import { SiReacthookform } from "react-icons/si";
import { NavLink } from "react-router-dom";

const SmallSidebar = () => {
  const navbarState = useSelector((state) => state.navbar);

  return (
    <Wrapper className={`sidebar-${navbarState.showSidebar ? "show" : "hide"}`}>
      <div className="sidebar-container">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="link-container">
          <div className="link">
            <NavLink to="/" className="cover">
              <div className="align-text" >
                <ImProfile className="icon" />
                <h4>Profile</h4>
              </div>
            </NavLink>
          </div>
          <div className="link">
            <NavLink to="all-jobs" className="cover">
              <div className="align-text">
                <TbListSearch className="icon" />
                <h4>All Jobs</h4>
              </div>
            </NavLink>
          </div>
          <div className="link">
            <NavLink to="add-job" className="cover">
              <div className="align-text">
                <SiReacthookform className="icon test" />
                <h4>Add Job</h4>
              </div>
            </NavLink>
          </div>
          <div className="link">
            <NavLink to="stats" className="cover">
              <div className="align-text">
                <MdOutlineQueryStats className="icon" />
                <h4>Stats</h4>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
