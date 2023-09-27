import Job from "./Job.js";
import Wrapper from "../Wrappers/JobsContainer.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobs } from "../features/jobs/JobsSlice.js";

const JobsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    requestState: { isLoading, hasError },
    jobsList: { rows, count },
  } = useSelector((state) => state.jobs);
  const { isEditing } = useSelector((state) => state.jobs);
  const { searchTerm, jobType, jobStatus, sorting, page } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    dispatch(
      getAllJobs({
        method: "get",
        url: "/api/v1/jobs/test",
        requireAuth: true,
        params: {
          search: searchTerm,
          type: jobType,
          status: jobStatus,
          order: sorting,
          page,
        },
      })
    );
  }, [searchTerm, jobType, jobStatus, sorting, page]);

  if (isEditing) {
    navigate("/add-job");
  }

  if (isLoading) return null;

  if (hasError) navigate('/error');

  return (
    <>
      <h3>{count} Jobs Found!</h3>
      <Wrapper>
        {rows.map((job) => {
          return <Job key={job.id} {...job}></Job>;
        })}
      </Wrapper>
    </>
  );
};

export default JobsContainer;
