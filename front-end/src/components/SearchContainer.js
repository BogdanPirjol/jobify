import FormRow from "./FormRow";
import FormSelect from "./FormSelect";
import Wrapper from "../Wrappers/SearchContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTerm,
  setJobType,
  setJobStatus,
  setSortType,
  clearFilters,
} from "../features/filters/FiltersSlice.js";

const SearchContainer = () => {
  const dispatch = useDispatch();

  const { searchTerm, jobType, jobStatus, sorting } = useSelector(
    (state) => state.filters
  );

  const handleSearchField = ({ target }) => {
    dispatch(setSearchTerm(target.value));
  };

  const handleJobType = ({ target }) => {
    dispatch(setJobType(target.value));
  };

  const handleJobStatus = ({ target }) => {
    dispatch(setJobStatus(target.value));
  };

  const handleSortMethod = ({ target }) => {
    dispatch(setSortType(target.value));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="search-container">
      <Wrapper>
        <h2>Search Job</h2>
        <form className="job-form">
          <FormRow
            name="Search"
            value={searchTerm}
            handleChange={handleSearchField}
          ></FormRow>
          <FormSelect
            name="Job Type"
            options={["all", "full-time", "part-time", "remote"]}
            value={jobType || "all"}
            handleChange={handleJobType}
          ></FormSelect>
          <FormSelect
            name="Job Status"
            options={["all", "pending", "accepted", "rejected"]}
            value={jobStatus || "all"}
            handleChange={handleJobStatus}
          ></FormSelect>
          <FormSelect
            name="Sort"
            options={["newest", "oldest", "a-z", "z-a"]}
            value={sorting || "newest"}
            handleChange={handleSortMethod}
          ></FormSelect>
          <div className="btn-row">
            <button
              className="input-btn"
              type="button"
              onClick={handleClearFilters}
            >
              Clear Filters
            </button>
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default SearchContainer;
