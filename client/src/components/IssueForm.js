import React, { useState, useEffect } from 'react';
import '../App.css';

const IssueForm = ({ onSubmit, issue }) => {
  const [formData, setFormData] = useState({ id: '', title: '', description: '' });

  useEffect(() => {
    if (issue) {
      setFormData(issue); // Load the selected issue data into the form for editing
    } else {
      setFormData({ id: '', title: '', description: '' }); // Clear the form for adding a new issue
    }
  }, [issue]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Send form data to the parent component (App.js)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>ID:</label>
        <input type="text" name="id" value={formData.id} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <button type="submit" className="button">
        {issue ? 'Update Issue' : 'Add Issue'}
      </button>
    </form>
  );
};

export default IssueForm;
