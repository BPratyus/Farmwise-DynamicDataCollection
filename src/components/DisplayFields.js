import React from 'react';

const DynamicForm = ({ rows }) => {
    const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform validation or any other actions
  };
  return (
    <form className="container row g-3 needs-validation" noValidate>
      {rows.map((row) => (
        <div className='container' key={row.fName}>
        <div className='col-md-4'>
          <label className='form-label'htmlFor={row.fName}>{row.fName}</label>
          {row.fType === 'TextBox' ? (
            <input
              type={row.fDataType === 'Number' ? 'number' : 'text'}
              id={row.fName}
              maxLength={row.fValid}
              className='form-control'
              required={row.fValid === 'Yes' ? 'required' : undefined}
            />
            
          ) : row.fType === 'Dropdown' ? (
            <select className='form-select' id={row.fieldName} >
              {row.values.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : row.fType === 'Date Picker' ? (
            
            <input className='form-control' type="date" id={row.fName}  />
          ) : null}
          </div>
        </div>
      ))}
      <div className=" container g-3 col-12">
      {rows.length > 0 && (
        <button className="btn btn-primary mb-3" type="submit" onClick={handleSubmit}>Submit</button>
      )}
      
      </div>
    </form>
  );
};

export default DynamicForm;
