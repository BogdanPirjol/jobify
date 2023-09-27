import { Outlet, Link, Navigate } from "react-router-dom";
import { Navbar, SmallSidebar, BigSidebar } from "../../components";
import Wrapper from "../../Wrappers/SharedLayout";

const SharedLayout = () => {
  return (
    <Wrapper>
      <div className="dashboard">
        <SmallSidebar/>
        <div className="column-nav">
          <Navbar></Navbar>
          <Outlet/>
        </div>
      </div>
    </Wrapper>
  );
};

export default SharedLayout;
