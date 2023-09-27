
const FormSelect = ({name, handleChange, options, value}) => {
    return (
      <div className='form-row test'>
        <label className="form-label" htmlFor={name}>{name}</label>
        <select className="form-input" onChange={handleChange} id={name} value={value}>
          {options?.map(opt => {
            return <option key={opt}>{opt}</option>
          })}
        </select>
      </div>
    );
  };
  
  export default FormSelect;