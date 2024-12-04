// import React from "react";

// const DynamicTable = ({ data, onDelete }) => {
//   return (
//     <div className="dynamic-table">
//       {data.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               {Object.keys(data[0]).map((key) => (
//                 <th key={key}>{key}</th>
//               ))}
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, index) => (
//               <tr key={index}>
//                 {Object.values(row).map((value, i) => (
//                   <td key={i}>{value}</td>
//                 ))}
//                 <td>
//                   <button onClick={() => onDelete(index)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data submitted yet.</p>
//       )}
//     </div>
//   );
// };

// export default DynamicTable;

// 1st method

// import React from "react";
// const DynamicTable = ({ data = [], headers = [], onDelete }) => {
//   return (
//     <div className="dynamic-table">
//       {data.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               {headers.map((header) => (
//                 <th key={header}>{header}</th>
//               ))}
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, rowIndex) => (
//               <tr key={rowIndex}>
//                 {headers.map((header, colIndex) => (
//                   <td key={colIndex}>{row[header] || ""}</td>
//                 ))}
//                 <td>
//                   <button onClick={() => onDelete(rowIndex)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data submitted yet.</p>
//       )}
//     </div>
//   );
// };
// export default DynamicTable;

// 2nd method
// import React from "react";
// const DynamicTable = ({ data = [], headers = [], onDelete }) => {
//   const headerLabels = headers.reduce((acc, header) => {
//     acc[header] = header; // Map header names to labels (if available)
//     return acc;
//   }, {});

//   return (
//     <div className="dynamic-table">
//       {data.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               {headers.map((header) => (
//                 <th key={header}>{headerLabels[header]}</th>
//               ))}
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, rowIndex) => (
//               <tr key={rowIndex}>
//                 {headers.map((header, colIndex) => (
//                   <td key={colIndex}>{row[header] || ""}</td>
//                 ))}
//                 <td>
//                   <button onClick={() => onDelete(rowIndex)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data submitted yet.</p>
//       )}
//     </div>
//   );
// };

// export default DynamicTable;

// 3rd method

// import React from "react";

// const DynamicTable = ({ data = [], headers = [], onDelete }) => {
//   return (
//     <div className="dynamic-table">
//       {data.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               {headers.map((header) => (
//                 <th key={header}>{header}</th>
//               ))}
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, rowIndex) => (
//               <tr key={rowIndex}>
//                 {headers.map((header, colIndex) => (
//                   <td key={colIndex}>{row[header] || ""}</td>
//                 ))}
//                 <td>
//                   <button onClick={() => onDelete(rowIndex)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data submitted yet.</p>
//       )}
//     </div>
//   );
// };

// export default DynamicTable;

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


