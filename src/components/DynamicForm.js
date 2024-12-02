import React from 'react'
import { useState, useEffect } from "react";
import { fetchFormStructure } from "../data/mockApi";
import "./DynamicForm.css"


function DynamicForm({ formType, onSubmit, editingData }) {
    const [fields, setFields] = useState([]);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const structure = fetchFormStructure(formType);
        setFields(structure.fields);
        if (editingData) {
          setFormData(editingData);
        } else {
          setFormData({}); // Reset form data if not editing
        }
  }, [formType, editingData]);

  const handleChange = (e, field) => {
    const { name, value } = e.target;

    // Validate character-only input for firstName and lastName
    if (
      (field.name === "firstName" || field.name === "lastName") &&
      !/^[a-zA-Z\s]*$/.test(value)
    ) {
      setErrors({ ...errors, [name]: `${field.label} must contain only letters.` });
    } else {
      setErrors({ ...errors, [name]: "" });
      setFormData({ ...formData, [name]: value });
    }
  };

    const handleValidation = () => {
        let isValid = true;
        const newErrors = {};

        fields.forEach((field) => {
        if (field.required && !formData[field.name]) {
            isValid = false;
            newErrors[field.name] = `${field.label} is required.`;
        }
        

        if (
          (field.name === "firstName" || field.name === "lastName") &&
          formData[field.name] &&
          !/^[a-zA-Z\s]*$/.test(formData[field.name])
        ) {
          isValid = false;
          newErrors[field.name] = `${field.label} must contain only letters.`;
        }
      });

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
        onSubmit(formData);
        }
    };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className="mb-3">
          <label htmlFor={field.name} className="form-label">
            {field.label} {field.required && <span className="text-danger">*</span>}
          </label>
          {field.type === "dropdown" ? (
            <select
              id={field.name}
              name={field.name}
              className="form-control"
              onChange={(e) => handleChange(e, field)}
            >
              <option value="">Select {field.label}</option>
              {field.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              className="form-control"
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(e, field)}
            />
          )}
          {errors[field.name] && <small className="text-danger">{errors[field.name]}</small>}
        </div>
      ))}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default DynamicForm
