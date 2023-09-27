import Wrapper from "../../Wrappers/AddJob.js";
import FormRow from "../../components/FormRow.js";
import FormSelect from "../../components/FormSelect.js";
import { useSelector, useDispatch } from "react-redux";
import {
  setJobDetails,
  createJob,
  clearAddJob,
  updateJob,
} from "../../features/jobs/JobsSlice.js";
import { Oval } from "react-loading-icons";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import triggerAlert from "../../features/utils/triggerAlert.js";
import { setPageCount } from "../../features/filters/FiltersSlice.js";

const AddJob = () => {
  const {
    addJob: {
      statuses,
      types,
      position,
      company,
      location,
      status,
      type,
      editingJobId,
    },
    requestState: { isLoading, hasError, requestStatus, statusMessage, isDone },
    isEditing,
  } = useSelector((state) => state.jobs);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      dispatch(
        updateJob({
          method: "patch",
          url: `/api/v1/jobs/${editingJobId}`,
          body: {
            company,
            position,
            status,
            jobType: type,
            jobLocation: location,
            id: editingJobId,
          },
          requireAuth: true,
        })
      );
    } else {
      dispatch(
        createJob({
          method: "post",
          url: `/api/v1/jobs/`,
          body: { company, position, jobLocation: location, status, type },
          requireAuth: true,
        })
      );
    }
  };

  const handleChange = ({ target: { id, value } }) => {
    dispatch(setJobDetails({ key: id, value }));
  };

  const handleClear = () => {
    dispatch(clearAddJob());
  };

  useEffect(() => {
    if (!isLoading && !hasError && isDone) {
      dispatch(
        triggerAlert({
          alertType: "success",
          alertText: "Request fulfilled!",
        })
      );
      navigate("/all-jobs");
      return () => {
        dispatch(clearAddJob());
      };
    } else {
      if (!isLoading && hasError) {
        dispatch(
          triggerAlert({
            alertType: requestStatus,
            alertText: statusMessage,
          })
        );
      }
    }
  }, [isLoading, hasError]);

  useEffect(() => {
    return () => {
      dispatch(clearAddJob());
      if(isEditing)
        dispatch(setPageCount(1));
    };
  }, []);

  return (
    <Wrapper>
      <h2>Add Job</h2>
      <form className="job-form" onSubmit={handleSubmit}>
        <FormRow
          name="position"
          handleChange={handleChange}
          value={position}
        ></FormRow>
        <FormRow
          name="company"
          handleChange={handleChange}
          value={company}
        ></FormRow>
        <FormRow
          name="location"
          handleChange={handleChange}
          value={location}
        ></FormRow>
        <FormSelect
          name="status"
          options={statuses}
          handleChange={handleChange}
          value={status}
        ></FormSelect>
        <FormSelect
          name="type"
          options={types}
          handleChange={handleChange}
          value={type}
        ></FormSelect>
        <div className="btn-row ">
          <button className="set input" type="submit" disabled={isLoading}>
            {isLoading ? <Oval /> : (isEditing ? "Save Changes" : "Add Job")}
          </button>
          <button className="reset input" type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
