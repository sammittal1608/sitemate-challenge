import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import IssueForm from './components/IssueForm';
import IssueList from './components/IssueList';

const App = () => {
  const [issues, setIssues] = useState([]);
  const [currentIssue, setCurrentIssue] = useState(null);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/issues');
      setIssues(response.data);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  const createOrUpdateIssue = async (issue) => {
    try {
      if (currentIssue && currentIssue.id === issue.id) {
        // Update the issue if a current issue is being edited
        await axios.put(`http://localhost:3001/api/issues/${issue.id}`, issue);
      } else {
        // Create a new issue if no issue is being edited
        await axios.post('http://localhost:3001/api/issues', issue);
      }
      fetchIssues(); // Refresh the list after update or create
      setCurrentIssue(null); // Clear the current issue state to reset the form
    } catch (error) {
      console.error('Error creating/updating issue:', error);
    }
  };

  const deleteIssue = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/issues/${id}`);
      fetchIssues(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting issue:', error);
    }
  };

  const handleEdit = (issue) => {
    setCurrentIssue(issue); // Set the selected issue to be edited
  };

  return (
    <div className="container">
      <h1 className="header">Issue Tracker</h1>
      <IssueForm onSubmit={createOrUpdateIssue} issue={currentIssue} />
      <IssueList issues={issues} onDelete={deleteIssue} onEdit={handleEdit} />
    </div>
  );
};

export default App;
