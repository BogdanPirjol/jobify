import Wrapper from "../Wrappers/PaginationArrow";
import { useDispatch } from "react-redux";
import { setPageCount } from "../features/filters/FiltersSlice";

const PaginationArrow = ({ pageNum, pageCount, type, children }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (type === "back") {
      if (pageNum - 1 > 0) return dispatch(setPageCount(pageNum - 1));
    }
    if (type === "forward") {
      if (pageNum < pageCount) return dispatch(setPageCount(pageNum + 1));
    }
  };

  return <Wrapper onClick={handleClick}>{children}</Wrapper>;
};

export default PaginationArrow;
