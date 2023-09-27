import SearchContainer from "../../components/SearchContainer.js";
import JobsContainer from "../../components/JobsContainer.js";
import Pagination from "../../components/Pagination.js";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading.js";

const AllJobs = () => {
  const { isLoading } = useSelector((state) => state.jobs.requestState);
  const { count } = useSelector((state) => state.jobs.jobsList);

  return (
    <div className="dashboard-content">
      {isLoading && <Loading />}
      <SearchContainer />
      <JobsContainer />
      {count ? <Pagination /> : null}
    </div>
  );
};

export default AllJobs;
