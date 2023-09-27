const JobDetails = ({ icon, text }) => {
  return (
    <>
      <div className="job-detail">
        {icon}
        <p>{text.charAt(0).toUpperCase() + text.slice(1)}</p>
      </div>
    </>
  );
};

export default JobDetails;
