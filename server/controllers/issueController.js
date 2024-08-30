let issues = [
    { id: 1, title: "Issue 1", description: "This is the first issue" },
    { id: 2, title: "Issue 2", description: "This is the second issue" }
  ];
  
  // Create Issue
  exports.createIssue = (req, res) => {
    const newIssue = req.body;
    issues.push(newIssue);
    console.log('Created:', newIssue);
    res.status(201).json(newIssue);
  };
  
  // Get All Issues
  exports.getIssues = (req, res) => {
    res.json(issues);
  };
  
  // Update Issue
  exports.updateIssue = (req, res) => {
    const issueId = parseInt(req.params.id);
    const updatedIssue = req.body;
    const index = issues.findIndex(issue => issue.id === issueId);
    if (index !== -1) {
      issues[index] = { ...issues[index], ...updatedIssue }; // Update only the modified fields
      console.log('Updated:', updatedIssue);
      res.json(issues[index]);
    } else {
      res.status(404).send('Issue not found');
    }
  };
  
  // Delete Issue
  exports.deleteIssue = (req, res) => {
    const issueId = parseInt(req.params.id);
    const index = issues.findIndex(issue => issue.id === issueId);
    if (index !== -1) {
      issues.splice(index, 1);
      console.log('Deleted issue with id:', issueId);
      res.status(204).end();
    } else {
      res.status(404).send('Issue not found');
    }
  };
  