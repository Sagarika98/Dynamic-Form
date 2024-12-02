Dynamic Form Application
A modern, responsive web application that allows users to dynamically fill out, edit, and manage various forms, such as user information, address details, and payment information. The application is built with React and includes features like progress tracking, modals for editing, and a visually appealing user interface.

Features
Dynamic form generation based on the selected form type.
Editable table display of submitted form data.
Modal-based editing functionality.
Progress bar to indicate form submission or editing progress.
Responsive design with modern UI components.
Form validation for required fields and specific input types.
Technologies Used
React: Frontend framework.
Bootstrap: Styling and layout.
CSS: Custom styles for enhanced UI.
JavaScript: Dynamic form functionality.
Getting Started
Prerequisites
Make sure you have the following installed:

Node.js (v14 or higher)
npm or yarn
Installation
Clone the repository:

git clone https://github.com/your-username/dynamic-form-app.git
cd dynamic-form-app
Install dependencies:

npm install
Start the development server:

npm start
Open your browser and navigate to:

http://localhost:3000
Project Structure
src/
├── components/
│   ├── DynamicForm.js        # Handles dynamic form rendering and validation
│   ├── Header.js             # Top navigation bar
│   ├── Footer.js             # Footer section
│   ├── Modal.js              # Modal for editing form entries
│   ├── ProgressBar.js        # Displays progress percentage
│   ├── TableDisplay.js       # Displays submitted data in a table
├── App.js                    # Main application file
├── App.css                   # Custom styles
├── index.js                  # Entry point for React
└── data/
    └── mockApi.js            # Simulated API for form structure
Customization
Adding New Form Types
Update the fetchFormStructure function in mockApi.js with the new form type and its fields.
Add the new form type to the <select> dropdown in App.js.
Styling
Customize styles by editing App.css or creating additional CSS files.

Screenshots
Home Page

Modal Form

Future Improvements
Add form persistence with local storage or a backend API.
Implement user authentication.
Enhance validation with libraries like Formik or React Hook Form.
Contributing
Fork the repository.
Create a feature branch:
git checkout -b feature-name
Commit your changes:
git commit -m "Add new feature"
Push to the branch:
git push origin feature-name
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
Developer: Sagarika Singh
Email: sagarikasingh0908@gmail.com
Feel free to reach out with any questions or suggestions! 😊