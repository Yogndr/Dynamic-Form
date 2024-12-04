// import React, { useState } from "react";

// const DynamicForm = ({ onSubmit, setProgress }) => {
//   const [formStructure, setFormStructure] = useState(null);
//   const [formValues, setFormValues] = useState({});
//   const [errors, setErrors] = useState({});

//   const formOptions = {
//     "User Information": {
//       fields: [
//         { name: "firstName", type: "text", label: "First Name", required: true },
//         { name: "lastName", type: "text", label: "Last Name", required: true },
//         { name: "age", type: "number", label: "Age", required: false },
//       ],
//     },
//     "Address Information": {
//       fields: [
//         { name: "street", type: "text", label: "Street", required: true },
//         { name: "city", type: "text", label: "City", required: true },
//         { name: "state", type: "dropdown", label: "State", options: [// States in India
//           "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//           "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
//           "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
//           "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
//           "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
//           "Uttar Pradesh", "Uttarakhand", "West Bengal",
//           "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", 
//           "Daman and Diu", "Lakshadweep", "Delhi", "Puducherry",

//           // States in USA
//           "California", "Texas", "New York", "Florida", "Illinois", 
//           "Ohio", "Pennsylvania", "Georgia", "Michigan", "Arizona",

//           // States/Regions from Other Countries
//           "Ontario", "Quebec", "British Columbia", "Victoria", "Queensland",
//           "New South Wales", "Scotland", "Wales", "Northern Ireland", 
//           "Tokyo", "Osaka", "Seoul", "Beijing", "Shanghai"], required: true },
//         { name: "zipCode", type: "text", label: "Zip Code", required: false },
//       ],
//     },
//     "Payment Information": {
//       fields: [
//         { name: "cardNumber", type: "text", label: "Card Number", required: true },
//         { name: "expiryDate", type: "date", label: "Expiry Date", required: true },
//         { name: "cvv", type: "password", label: "CVV", required: true },
//         { name: "cardholderName", type: "text", label: "Cardholder Name", required: true },
//       ],
//     },
//   };

//   const handleDropdownChange = (e) => {
//     const selectedOption = e.target.value;
//     setFormStructure(formOptions[selectedOption] || null);
//     setFormValues({});
//     setProgress(0);
//   };

//   const handleChange = (e, field) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });

//     // Update progress
//     const filledFields = Object.keys(formValues).length + 1;
//     const totalFields = formStructure.fields.length;
//     setProgress(Math.min((filledFields / totalFields) * 100, 100));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     formStructure.fields.forEach((field) => {
//       if (field.required && !formValues[field.name]) {
//         newErrors[field.name] = `${field.label} is required`;
//       }
//     });
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       onSubmit(formValues);
//       setFormValues({});
//       setErrors({});
//       alert("Form submitted successfully!");
//     }
//   };

//   return (
//     <div className="dynamic-form">
//       <select onChange={handleDropdownChange}>
//         <option value="">Select Form</option>
//         {Object.keys(formOptions).map((key) => (
//           <option key={key} value={key}>
//             {key}
//           </option>
//         ))}
//       </select>

//       {formStructure && (
//         <form onSubmit={handleSubmit}>
//           {formStructure.fields.map((field) => (
//             <div key={field.name} className="form-group">
//               <label>{field.label}</label>
//               {field.type === "dropdown" ? (
//                 <select name={field.name} onChange={(e) => handleChange(e, field)}>
//                   <option value="">Select {field.label}</option>
//                   {field.options.map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               ) : (
//                 <input
//                   type={field.type}
//                   name={field.name}
//                   value={formValues[field.name] || ""}
//                   onChange={(e) => handleChange(e, field)}
//                 />
//               )}
//               {errors[field.name] && <span className="error">{errors[field.name]}</span>}
//             </div>
//           ))}
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default DynamicForm;

// 1st method

// import React, { useState } from "react";
// import DynamicTable from "./DynamicTable";

// const DynamicForm = ({ onSubmit, setProgress }) => {
//   const [formStructure, setFormStructure] = useState(null);
//   const [formValues, setFormValues] = useState({});
//   const [errors, setErrors] = useState({});
//   const [tableData, setTableData] = useState([]);

//   const formOptions = {
//     "User Information": {
//       fields: [
//         { name: "firstName", type: "text", label: "First Name", required: true },
//         { name: "lastName", type: "text", label: "Last Name", required: true },
//         { name: "age", type: "number", label: "Age", required: false },
//       ],
//     },
//     "Address Information": {
//       fields: [
//         { name: "street", type: "text", label: "Street", required: true },
//         { name: "city", type: "text", label: "City", required: true },
//         { name: "state", type: "dropdown", label: "State", options: [
//           "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//           "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
//           "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
//           "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
//           "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
//           "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"], required: true },
//         { name: "zipCode", type: "text", label: "Zip Code", required: false },
//       ],
//     },
//     "Payment Information": {
//       fields: [
//         { name: "cardNumber", type: "text", label: "Card Number", required: true },
//         { name: "expiryDate", type: "date", label: "Expiry Date", required: true },
//         { name: "cvv", type: "password", label: "CVV", required: true },
//         { name: "cardholderName", type: "text", label: "Cardholder Name", required: true },
//       ],
//     },
//   };

//   const handleDropdownChange = (e) => {
//     const selectedOption = e.target.value;
//     setFormStructure(formOptions[selectedOption] || null);
//     setFormValues({});
//     setProgress(0);
//   };

//   const handleChange = (e, field) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });

//     // Update progress
//     const filledFields = Object.keys(formValues).length + 1;
//     const totalFields = formStructure.fields.length;
//     setProgress(Math.min((filledFields / totalFields) * 100, 100));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     formStructure.fields.forEach((field) => {
//       if (field.required && !formValues[field.name]) {
//         newErrors[field.name] = `${field.label} is required`;
//       }
//     });
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       // Store the form data in the table
//       setTableData([...tableData, formValues]);
//       setFormValues({});
//       setErrors({});
//       alert("Form submitted successfully!");
//     }
//   };

//   const handleDelete = (rowIndex) => {
//     setTableData((prevData) => prevData.filter((_, index) => index !== rowIndex));
//   };

//   return (
//     <div className="dynamic-form">
//       <select onChange={handleDropdownChange}>
//         <option value="">Select Form</option>
//         {Object.keys(formOptions).map((key) => (
//           <option key={key} value={key}>
//             {key}
//           </option>
//         ))}
//       </select>

//       {formStructure && (
//         <form onSubmit={handleSubmit}>
//           {formStructure.fields.map((field) => (
//             <div key={field.name} className="form-group">
//               <label>{field.label}</label>
//               {field.type === "dropdown" ? (
//                 <select name={field.name} onChange={(e) => handleChange(e, field)}>
//                   <option value="">Select {field.label}</option>
//                   {field.options.map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               ) : (
//                 <input
//                   type={field.type}
//                   name={field.name}
//                   value={formValues[field.name] || ""}
//                   onChange={(e) => handleChange(e, field)}
//                 />
//               )}
//               {errors[field.name] && <span className="error">{errors[field.name]}</span>}
//             </div>
//           ))}
//           <button type="submit">Submit</button>
//         </form>
//       )}

//       {/* Dynamic Table */}
//       <h2>Form Data Table</h2>
//       <DynamicTable
//   data={tableData}
//   headers={formStructure ? formStructure.fields.map((field) => field.name) : []}
//   onDelete={handleDelete}
// />

//     </div>
//   );
// };

// export default DynamicForm;

// 2nd mthod

// import React, { useState } from "react";
// import DynamicTable from "./DynamicTable";

// const DynamicForm = ({ onSubmit, setProgress }) => {
//   const [formStructure, setFormStructure] = useState(null);
//   const [formValues, setFormValues] = useState({});
//   const [errors, setErrors] = useState({});
//   const [tableData, setTableData] = useState({
//     "User Information": [],
//     "Address Information": [],
//     "Payment Information": [],
//   });
//   const [currentForm, setCurrentForm] = useState("");

//   const formOptions = {
//     "User Information": {
//       fields: [
//         { name: "firstName", type: "text", label: "First Name", required: true },
//         { name: "lastName", type: "text", label: "Last Name", required: true },
//         { name: "age", type: "number", label: "Age", required: false },
//       ],
//     },
//     "Address Information": {
//       fields: [
//         { name: "street", type: "text", label: "Street", required: true },
//         { name: "city", type: "text", label: "City", required: true },
//         { name: "state", type: "dropdown", label: "State", options: [
//           // States in India
//           "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//           "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
//           "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
//           "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
//           "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
//           "Uttar Pradesh", "Uttarakhand", "West Bengal",
//           "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", 
//           "Daman and Diu", "Lakshadweep", "Delhi", "Puducherry",

//           // States in USA
//           "California", "Texas", "New York", "Florida", "Illinois", 
//           "Ohio", "Pennsylvania", "Georgia", "Michigan", "Arizona",

//           // States/Regions from Other Countries
//           "Ontario", "Quebec", "British Columbia", "Victoria", "Queensland",
//           "New South Wales", "Scotland", "Wales", "Northern Ireland", 
//           "Tokyo", "Osaka", "Seoul", "Beijing", "Shanghai"], required: true },
//         { name: "zipCode", type: "text", label: "Zip Code", required: false },
//       ],
//     },
//     "Payment Information": {
//       fields: [
//         { name: "cardNumber", type: "text", label: "Card Number", required: true },
//         { name: "expiryDate", type: "date", label: "Expiry Date", required: true },
//         { name: "cvv", type: "password", label: "CVV", required: true },
//         { name: "cardholderName", type: "text", label: "Cardholder Name", required: true },
//       ],
//     },
//   };

//   const handleDropdownChange = (e) => {
//     const selectedOption = e.target.value;
//     setCurrentForm(selectedOption);
//     setFormStructure(formOptions[selectedOption] || null);
//     setFormValues({});
//     setProgress(0);
//   };

//   const handleChange = (e, field) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });

//     // Update progress
//     const filledFields = Object.keys(formValues).length + 1;
//     const totalFields = formStructure.fields.length;
//     setProgress(Math.min((filledFields / totalFields) * 100, 100));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     formStructure.fields.forEach((field) => {
//       if (field.required && !formValues[field.name]) {
//         newErrors[field.name] = `${field.label} is required`;
//       }
//     });
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       // Store the form data in the relevant form type's table data
//       setTableData((prevData) => ({
//         ...prevData,
//         [currentForm]: [...prevData[currentForm], formValues],
//       }));
//       setFormValues({});
//       setErrors({});
//       alert("Form submitted successfully!");
//     }
//   };

//   const handleDelete = (rowIndex) => {
//     setTableData((prevData) => ({
//       ...prevData,
//       [currentForm]: prevData[currentForm].filter((_, index) => index !== rowIndex),
//     }));
//   };

//   return (
//     <div className="dynamic-form">
//       <select onChange={handleDropdownChange}>
//         <option value="">Select Form</option>
//         {Object.keys(formOptions).map((key) => (
//           <option key={key} value={key}>
//             {key}
//           </option>
//         ))}
//       </select>

//       {formStructure && (
//         <form onSubmit={handleSubmit}>
//           {formStructure.fields.map((field) => (
//             <div key={field.name} className="form-group">
//               <label>{field.label}</label>
//               {field.type === "dropdown" ? (
//                 <select name={field.name} onChange={(e) => handleChange(e, field)}>
//                   <option value="">Select {field.label}</option>
//                   {field.options.map((option) => (
//                     <option key={option} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               ) : (
//                 <input
//                   type={field.type}
//                   name={field.name}
//                   value={formValues[field.name] || ""}
//                   onChange={(e) => handleChange(e, field)}
//                 />
//               )}
//               {errors[field.name] && <span className="error">{errors[field.name]}</span>}
//             </div>
//           ))}
//           <button type="submit">Submit</button>
//         </form>
//       )}

//       {/* Dynamic Table */}
//       <h2>Form Data Table</h2>
//       <DynamicTable
//         data={tableData[currentForm] || []}
//         headers={formStructure ? formStructure.fields.map((field) => field.name) : []}
//         onDelete={handleDelete}
//       />
//     </div>
//   );
// };

// export default DynamicForm;

// 3rd method

import React, { useState } from "react";
import DynamicTable from "./DynamicTable";

const DynamicForm = ({ onSubmit, setProgress }) => {
  const [formStructure, setFormStructure] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const [tableData, setTableData] = useState({
    "User Information": [],
    "Address Information": [],
    "Payment Information": [],
  });
  const [currentForm, setCurrentForm] = useState("");
  const [editIndex, setEditIndex] = useState(null); // Track the index of the row being edited
  const [successMessage, setSuccessMessage] = useState("");

  const formOptions = {
    "User Information": {
      fields: [
        { name: "firstName", type: "text", label: "First Name", required: true },
        { name: "lastName", type: "text", label: "Last Name", required: true },
        { name: "age", type: "number", label: "Age", required: false },
      ],
    },
    "Address Information": {
      fields: [
        { name: "street", type: "text", label: "Street", required: true },
        { name: "city", type: "text", label: "City", required: true },
        { name: "state", type: "dropdown", label: "State", options: [
          // States in India
         // States in India
          "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
          "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
          "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
          "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
          "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
          "Uttar Pradesh", "Uttarakhand", "West Bengal",
          "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", 
          "Daman and Diu", "Lakshadweep", "Delhi", "Puducherry",

          // States in USA
          "California", "Texas", "New York", "Florida", "Illinois", 
          "Ohio", "Pennsylvania", "Georgia", "Michigan", "Arizona",

          // States/Regions from Other Countries
          "Ontario", "Quebec", "British Columbia", "Victoria", "Queensland",
          "New South Wales", "Scotland", "Wales", "Northern Ireland", 
          "Tokyo", "Osaka", "Seoul", "Beijing", "Shanghai" 
        ], required: true },
        { name: "zipCode", type: "text", label: "Zip Code", required: false },
      ],
    },
    "Payment Information": {
      fields: [
        { name: "cardNumber", type: "text", label: "Card Number", required: true },
        { name: "expiryDate", type: "date", label: "Expiry Date", required: true },
        { name: "cvv", type: "password", label: "CVV", required: true },
        { name: "cardholderName", type: "text", label: "Cardholder Name", required: true },
      ],
    },
  };

  const handleDropdownChange = (e) => {
    const selectedOption = e.target.value;
    setCurrentForm(selectedOption);
    setFormStructure(formOptions[selectedOption] || null);
    setFormValues({});
    setProgress(0);
  };

  const handleChange = (e, field) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // Update progress
    const filledFields = Object.keys(formValues).length + 1;
    const totalFields = formStructure.fields.length;
    setProgress(Math.min((filledFields / totalFields) * 100, 100));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    formStructure.fields.forEach((field) => {
      if (field.required && !formValues[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Store the form data in the relevant form type's table data
      if (editIndex !== null) {
        // Update the existing row
        const updatedData = [...tableData[currentForm]];
        updatedData[editIndex] = formValues;
        setTableData((prevData) => ({
          ...prevData,
          [currentForm]: updatedData,
        }));
        setSuccessMessage("Edit successfully!");
        setEditIndex(null);
      } else {
        // Add new row
        setTableData((prevData) => ({
          ...prevData,
          [currentForm]: [...prevData[currentForm], formValues],
        }));
        setSuccessMessage("Form submitted successfully!");
      }
      setFormValues({});
      setErrors({});
    }
  };

  const handleDelete = (rowIndex) => {
    setTableData((prevData) => ({
      ...prevData,
      [currentForm]: prevData[currentForm].filter((_, index) => index !== rowIndex),
    }));
    setSuccessMessage("Deleted successfully!");
  };

  const handleEdit = (rowIndex) => {
    setEditIndex(rowIndex);
    setFormValues(tableData[currentForm][rowIndex]);
    setSuccessMessage(""); // Clear any previous success message
  };

  return (
    <div className="dynamic-form">
      <select onChange={handleDropdownChange}>
        <option value="">Select Form</option>
        {Object.keys(formOptions).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      {formStructure && (
        <form onSubmit={handleSubmit}>
          {formStructure.fields.map((field) => (
            <div key={field.name} className="form-group">
              <label>{field.label}</label>
              {field.type === "dropdown" ? (
                <select name={field.name} onChange={(e) => handleChange(e, field)}>
                  <option value="">Select {field.label}</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formValues[field.name] || ""}
                  onChange={(e) => handleChange(e, field)}
                />
              )}
              {errors[field.name] && <span className="error">{errors[field.name]}</span>}
            </div>
          ))}
          <button type="submit">{editIndex !== null ? "Update" : "Submit"}</button>
        </form>
      )}

      {successMessage && <p className="success-message">{successMessage}</p>}

      {/* Dynamic Table */}
      <h2>Form Data Table</h2>
      <DynamicTable
        data={tableData[currentForm] || []}
        headers={formStructure ? formStructure.fields.map((field) => field.name) : []}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default DynamicForm;
