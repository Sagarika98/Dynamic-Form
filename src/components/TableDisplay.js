import React from 'react';
import "./TableDisplay.css"

function TableDisplay({ data, onEdit, onDelete }) {
  return (
    <table className="table table-bordered mt-3">
      <thead>
        <tr>
          {Object.keys(data[0] || {}).map((key) => (
            <th key={key}>{key}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, idx) => (
              <td key={idx}>{value}</td>
            ))}
            <td>
              <button className="btn btn-warning btn-sm" onClick={() => onEdit(index)}>
                Edit
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(index)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableDisplay
