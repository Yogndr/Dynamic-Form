

// 4th method

import React from "react";

const DynamicTable = ({ data = [], headers = [], onDelete, onEdit }) => {
  return (
    <div className="dynamic-table">
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex}>{row[header] || ""}</td>
                ))}
                <td>
                  <button onClick={() => onEdit(rowIndex)}>Edit</button>
                  <button onClick={() => onDelete(rowIndex)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
};

export default DynamicTable;


