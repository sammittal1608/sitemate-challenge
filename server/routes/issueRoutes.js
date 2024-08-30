const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');

// Create Issue
router.post('/', issueController.createIssue);

// Read Issues
router.get('/', issueController.getIssues);

// Update Issue
router.put('/:id', issueController.updateIssue);

// Delete Issue
router.delete('/:id', issueController.deleteIssue);

module.exports = router;
