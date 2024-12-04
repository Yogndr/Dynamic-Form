# Dynamic Form Implementation in React
## Objective-This project demonstrates a dynamic form implementation using React. The form fields are generated based on a backend API response and adjust dynamically based on user selections (e.g., selecting different options from a dropdown changes the form structure).
---
## Features
### Rendering Dynamic Fields
- Dynamically renders form fields based on API responses, displaying appropriate labels, input types, and required status.- Updates fields dynamically based on user dropdown selections.
### Responsive UI
- A responsive header and footer adapt seamlessly for both desktop and mobile devices.- Ensures the overall form layout is user-friendly and adjusts for various screen sizes.
### Form Validation
- Validates form fields dynamically based on API-provided rules, ensuring required fields are filled and data types are correct.- Displays appropriate error messages below fields if validation fails, guiding users to correct their input.
### User Feedback & Interactions
- On successful form submission, displays a success message like "Sign-up Successful."- Provides real-time feedback for user actions:
  - "File uploaded successfully" after a file upload.  - "Entry deleted successfully" after deleting a form entry.
  - "Changes saved successfully" after editing and saving an entry.
### Tabular Display of Form Data- After form submission, displays all submitted data in a tabular format.
- Each table row includes Edit and Delete buttons for user interaction:  - Edit: Modify existing entries.
  - Delete: Remove entries from the table.
### Progress Indicator- Includes a progress bar that updates dynamically as users complete required form fields.
- Alternatively, displays animations to indicate successful form submission.
### Error Handling- Handles API request failures gracefully, displaying a user-friendly error message if the form structure cannot be loaded.
### Code Quality
- Maintains clean, readable, and well-commented code to ensure maintainability and clarity.- Provides proper comments explaining the logic and structure of the codebase.
---
## Getting Started
### Prerequisites
To run this project, ensure you have the following installed:- Node.js (>= 16.x)
- npm (>= 8.x)
### Installation
1. Clone the repository:
    
copy


    cd dynamic-form-react    
2. Install dependencies:
    
copy


    
3. Start the development server:
    
copy


    
---
## Examples of User Interactions
1. Dynamic Dropdown Selection:     Selecting an option in one dropdown dynamically updates the available fields in the form.
   - Example: Selecting "User Type" as "Admin" displays additional fields such as "Admin Code."
2. Conditional Input Fields:     Certain fields appear or disappear based on specific inputs.
   - Example: Checking a "Do you have pets?" checkbox displays a "Number of Pets" input field.
3. Real-time Feedback:     Provide immediate feedback for user actions, such as uploading files, editing, or deleting entries.
4. Dynamic Progress Tracking:  
   Users can see their form completion progress via a dynamic progress bar.
---
## DependenciesThis project uses the following dependencies:
```json
"dependencies": {    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",    "web-vitals": "^2.1.4"
}
