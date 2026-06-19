import React, { useState } from 'react';
import './App.css';

const UserForm = () => {
  // 1. Manage state for form inputs
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  // 2. Manage state for submitted data to display below
  const [submittedData, setSubmittedData] = useState(null);

  // Handle value tracking dynamically for both fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission logic
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Ensure inputs aren't entirely empty before displaying
    if (formData.name.trim() && formData.email.trim()) {
      setSubmittedData({ name: formData.name, email: formData.email });
      
      // Clear input fields after successful submission tracking
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="user-form">
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div className="input-group">
          <label>Email;</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {/* 3. Conditional Rendering: Display output only after submission */}
      {submittedData && (
        <div className="display-box">
          {submittedData.name} - {submittedData.email}
        </div>
      )}
    </div>
  );
};

export default UserForm;