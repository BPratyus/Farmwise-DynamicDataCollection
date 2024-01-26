import React from 'react';

const DisplayFields = ({  fields, formData, onFieldChange }) => {
  return (
    <div>
      {fields.map((field) => (
        <div key={field.label}>
          <label htmlFor={field.label}>{field.label}:</label>
          {field.type === 'text' ? (
            <input
              type="text"
              id={field.label}
              value={formData[field.label]}
              onChange={(e) => onFieldChange(field.label, e.target.value)}
            />
          ) : field.type === 'dropdown' ? (
            <select
              id={field.label}
              value={formData[field.label]}
              onChange={(e) => onFieldChange(field.label, e.target.value)}
            >
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default DisplayFields;
