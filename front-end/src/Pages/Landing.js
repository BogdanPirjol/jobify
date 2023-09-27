import landing_image from "../graphics/organize_resume.svg";
import Wrapper from "../Wrappers/Landing";

//components
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../features/auth/AuthSlice";

const LandingPage = () => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);

  dispatch(resetState());

  return (
    <Wrapper>
      <div className="nav">
        {/* navigation area */}
        <nav>
          <Logo />
        </nav>
      </div>

      <div className="main-content">
        {/* main content */}
        <div className="landing-info">
          <h2>The Jobify Platform</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            placerat suscipit velit, sit amet imperdiet lacus blandit et. Proin
            sit amet hendrerit erat, at posuere justo. <br></br>Vivamus lacinia
            euismod eros, in aliquet nunc finibus eget. Aenean odio nulla,
            commodo a sollicitudin a, bibendum nec metus. Donec et justo odio.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            condimentum nisl sapien, a viverra enim lobortis vitae. Duis
            hendrerit finibus pulvinar. <br></br>Phasellus eget tempor massa,
            consequat pretium tellus. Suspendisse et venenatis orci. Mauris
            ornare, nisi a pulvinar interdum, orci nunc vestibulum mauris, quis
            mattis nulla ex vel ex.
          </p>
          <Link className="btn" to="/register">
            Start Experience
          </Link>
        </div>

        {/* secondary content: images */}
        <aside className="landing-graphic">
          <img src={landing_image} />
        </aside>
      </div>
    </Wrapper>
  );
};

export default LandingPage;
