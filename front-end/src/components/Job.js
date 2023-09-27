import Wrapper from "../Wrappers/Job.js";
import { MdOutlineLocationCity } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { TbClockHour8 } from "react-icons/tb";
import dateTranslator from "../features/utils/dateTranslator.js";
import moment from "moment";
import JobDetails from "./JobDetails.js";
import {
  deleteJob,
  editJob,
  setJobDetails,
} from "../features/jobs/JobsSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Job = ({
  position: jobPosition,
  company,
  jobLocation,
  updatedAt: date,
  status,
  jobType,
  id,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  date = dateTranslator(moment.utc(date).format("dddd DD MMMM YYYY"));
  const handleDelete = () => {
    dispatch(
      deleteJob({
        url: `/api/v1/jobs/${id}`,
        method: "delete",
        requireAuth: true,
      })
    );
  };
  const handleEdit = () => {
    dispatch(editJob({ isEditing: true }));
    dispatch(setJobDetails({ key: "company", value: company }));
    dispatch(setJobDetails({ key: "position", value: jobPosition }));
    dispatch(setJobDetails({ key: "location", value: jobLocation }));
    dispatch(setJobDetails({ key: "status", value: status }));
    dispatch(setJobDetails({ key: "type", value: jobType }));
    dispatch(setJobDetails({ key: "editingJobId", value: id }));
    navigate("/add-job");
  };
  return (
    <Wrapper>
      <div className="job-title-container">
        <div className="job-logo">{company.charAt(0).toUpperCase()}</div>
        <div className="job-description">
          <p className="big-font">
            {jobPosition.charAt(0).toUpperCase() + jobPosition.slice(1)}
          </p>
          <p>{company.charAt(0).toUpperCase() + company.slice(1)}</p>
        </div>
      </div>
      <div className="job-details-container">
        <div className="job-details">
          <JobDetails
            icon={<MdOutlineLocationCity />}
            text={jobLocation}
          ></JobDetails>
          <JobDetails icon={<BsCalendarDate />} text={date}></JobDetails>
          <JobDetails icon={<TbClockHour8 />} text={jobType}></JobDetails>
          <div className={`job-detail job-status ${status}`}>
            <p>{status}</p>
          </div>
        </div>
        <div className="job-actions">
          <button className="job-btn" type="button" onClick={handleEdit}>
            Edit
          </button>
          <button className="job-btn" type="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Job;
