import React from 'react'

export default function Table(props) {
  return (
    <table className="table table-striped caption-top mt-3 mb-3">
    <caption>List of Added Fields</caption>
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Field Name</th>
      <th scope="col">Field Type</th>
      <th scope="col">Field Data Type</th>
      <th scope="col">Field Validation</th>
      <th scope="col">Field Data</th>
      <th scope="col">is Mandatory</th>
    </tr>
  </thead>
  <tbody>
    {props.rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.fName}</td>
              <td>{row.fType}</td>
              <td>{row.fDataType}</td>
              <td>{row.fValid}</td>
              <td>{Array.isArray(row.values) ? row.values.join(' ') : row.values}</td>
              <td>{row.isMan}</td>
            </tr>
          ))}
  </tbody>
</table>
  )
}
