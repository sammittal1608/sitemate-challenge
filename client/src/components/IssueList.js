import React from 'react';
import '../App.css';

const IssueList = ({ issues, onDelete, onEdit }) => {
  return (
    <div>
      <h3 className="header">Issue List</h3>
      <ul className="issue-list">
        {issues.map((issue) => (
          <li key={issue.id} className="issue-item">
            <div>
              <h3>{issue.title}</h3>
              <p>{issue.description}</p>
            </div>
            <div>
              <button className="icon-button" onClick={() => onEdit(issue)}>Edit</button>
              <button className="icon-button" onClick={() => onDelete(issue.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;
