import { Bars } from "react-loading-icons";
import Wrapper from "../Wrappers/Loading.js";

const Loading = ({ justyfied }) => {
  return (
    <Wrapper>
      <div className="center">
        <Bars fill={"#00a8e8"} />
      </div>
    </Wrapper>
  );
};

export default Loading;
