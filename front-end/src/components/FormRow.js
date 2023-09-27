const FormRow = ({ name, handleChange, type, value }) => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {name}
      </label>
      <input
        autoComplete="off"
        className="form-input"
        type={type}
        onChange={handleChange}
        id={name}
        name={name}
        value={value}
      ></input>
    </div>
  );
};

export default FormRow;
