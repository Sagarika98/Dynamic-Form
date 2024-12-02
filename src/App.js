import React, { useState } from "react";
import DynamicForm from "./components/DynamicForm";
import ProgressBar from "./components/ProgressBar";
import TableDisplay from "./components/TableDisplay";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  const [formType, setFormType] = useState("User Information");
  const [submittedData, setSubmittedData] = useState([]);
  const [progress, setProgress] = useState(0);
  const [editingIndex, setEditingIndex] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

// Function to add or update form data
  const handleFormSubmit = (formData) => {
    if (editingIndex !== null) {
      // Update the specific row if in editing mode
      const updatedData = [...submittedData];
      updatedData[editingIndex] = formData;
      setSubmittedData(updatedData);
      setEditingIndex(null); // Exit editing mode
    } else {
      // Add new entry
      setSubmittedData([...submittedData, formData]);
    }

    setProgress(100); // Update progress
    setSuccessMessage("Form submitted successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
    setIsModalOpen(false);
  };

  const handleEdit = (index) => {
    setEditingIndex(index); // Set the row index being edited
    setIsModalOpen(true);
    setSuccessMessage(""); // Clear any success message
    setProgress(50); // Set progress to halfway during editing
  };


  const handleDelete = (index) => {
    const updatedData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(updatedData);
    setEditingIndex(null);
    setSuccessMessage("Entry deleted successfully!");
  };







  return (
    <>
    <Header></Header>

    <div className="container">



      {/* Main Content */}
      <main className="container my-4">
        <ProgressBar completed={progress} />
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="formType" className="form-label">
            Select Form Type:
          </label>
          <select
            id="formType"
            className="form-select"
            value={formType}
            onChange={(e) => {
              setFormType(e.target.value);
              setEditingIndex(null); // Reset editing mode when form type changes
              setSuccessMessage(""); // Clear success message
            }}
          >
            <option value="User Information">User Information</option>
            <option value="Address Information">Address Information</option>
            <option value="Payment Information">Payment Information</option>
          </select>
        </div>

        

        <DynamicForm
                    formType={formType}
                    onSubmit={handleFormSubmit}
                    editingData={null} // Regular form submission
          />

        {submittedData.length > 0 && (
          <TableDisplay data={submittedData} onEdit={handleEdit} onDelete={handleDelete} />
        )}
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <DynamicForm
            formType={formType}
            onSubmit={handleFormSubmit}
            editingData={editingIndex !== null ? submittedData[editingIndex] : null} // Pre-fill form with editing data
          />
        </Modal>

      

    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
