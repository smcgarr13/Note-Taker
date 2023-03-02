const express = require('express');
const router = express.Router();
const path = require('path');

// Serve the index.html file on the root URL
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Serve the notes.html file on the /notes endpoint
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;
