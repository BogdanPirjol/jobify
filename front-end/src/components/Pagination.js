import Wrapper from "../Wrappers/Pagination";
import PaginationItem from "./PaginationItem";
import PaginationArrow from "./PaginationArrow";
import { useSelector } from "react-redux";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Pagination = () => {
  const { count } = useSelector((state) => state.jobs.jobsList);
  const { page: activePage } = useSelector((state) => state.filters);
  const { isLoading } = useSelector(state => state.jobs.requestState);

  const numOfPages = Math.ceil(count / 10);
  let paginationItems = [];
  for (let i = 0; i < numOfPages; i += 1) {
    paginationItems.push(
      <PaginationItem
        key={i}
        pageCount={i + 1}
        active={i + 1 === activePage && true}
      />
    );
  }

  return (
    <Wrapper>
      <PaginationArrow pageCount={numOfPages} pageNum={activePage} type="back">
        <IoIosArrowBack />
      </PaginationArrow>
      {paginationItems.map((pageItem) => pageItem)}
      <PaginationArrow
        pageCount={numOfPages}
        pageNum={activePage}
        type="forward"
      >
        <IoIosArrowForward />
      </PaginationArrow>
    </Wrapper>
  );
};

export default Pagination;
